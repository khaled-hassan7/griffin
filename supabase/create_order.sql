-- ============================================================
-- create_order — atomic order + order_items creation
--
-- Reference only. Run once in the Supabase SQL editor.
-- Called from src/data/orders.js via supabase.rpc("create_order", {...})
--
-- p_shipping       jsonb  { firstName, lastName, phone, address,
--                           furtherInformation, governorate, town }
-- p_payment_method text   'cash' | 'card'
-- p_cart           jsonb  [{ "product_id": 6, "size": "m", "quantity": 2 }, ...]
--
-- Notes:
--   * security definer: inserts keep working after RLS is locked down;
--     direct DML on orders/order_items can then be revoked from
--     anon/authenticated (see the revoke statements at the bottom).
--   * user_id comes from the request JWT via auth.uid(), null for guests.
--     It is never accepted from client input.
--   * totalPrice is computed from products.price inside the database —
--     client-sent prices are never trusted.
--   * One transaction: a failure anywhere rolls everything back, so the
--     old JS-side manual delete rollback is no longer needed.
-- ============================================================

create or replace function public.create_order(
  p_shipping       jsonb,
  p_payment_method text,
  p_cart           jsonb
)
returns bigint
language plpgsql
security definer
set search_path = public
as $$
declare
  v_user_id  uuid;
  v_order_id bigint;
  v_total    numeric;
  v_matched  int;
begin
  -- user_id from the request JWT only; null for guests.
  v_user_id := auth.uid();

  if p_cart is null or jsonb_typeof(p_cart) <> 'array'
     or jsonb_array_length(p_cart) = 0 then
    raise exception 'Cart is empty.';
  end if;

  if p_payment_method is null or p_payment_method not in ('cash', 'card') then
    raise exception 'Invalid payment method.';
  end if;

  -- Quantity sanity check: every item must be between 1 and 20.
  if exists (
    select 1
    from jsonb_to_recordset(p_cart) as i(product_id int, size text, quantity int)
    where i.quantity is null or i.quantity < 1 or i.quantity > 20
  ) then
    raise exception 'Quantity per item must be between 1 and 20.';
  end if;

  -- Total computed from products.price inside the database.
  select coalesce(sum(p.price * i.quantity), 0), count(*)
    into v_total, v_matched
  from jsonb_to_recordset(p_cart) as i(product_id int, size text, quantity int)
  join public.products p on p.id = i.product_id
  where i.quantity > 0;

  if v_matched <> jsonb_array_length(p_cart) then
    raise exception 'One or more products in the cart no longer exist.';
  end if;

  insert into public.orders
    ("firstName", "lastName", "phone", "address", "governorate",
     "furtherInformation", "town", "paymentMethod", "totalPrice", user_id)
  values
    (coalesce(p_shipping->>'firstName', ''),
     coalesce(p_shipping->>'lastName', ''),
     nullif(p_shipping->>'phone', ''),
     coalesce(p_shipping->>'address', ''),
     nullif(p_shipping->>'governorate', ''),
     nullif(p_shipping->>'furtherInformation', ''),
     nullif(p_shipping->>'town', ''),
     p_payment_method,
     v_total,
     v_user_id)
  returning id into v_order_id;

  insert into public.order_items (order_id, product_id, price, size, quantity)
  select v_order_id, i.product_id, p.price, i.size, i.quantity
  from jsonb_to_recordset(p_cart) as i(product_id int, size text, quantity int)
  join public.products p on p.id = i.product_id
  where i.quantity > 0;

  return v_order_id;
end;
$$;

grant execute on function public.create_order(jsonb, text, jsonb)
  to anon, authenticated;

-- When you lock the RLS policies (after enabling RLS on these tables):
--   revoke all on public.orders      from anon, authenticated;
--   revoke all on public.order_items from anon, authenticated;
-- The function uses definer rights, so legitimate order creation still works.
