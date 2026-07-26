import Button from "../ui/Button";
import CartItemsList from "./CartItemsList";

function CartContent({ cart }) {
  return (
    <div className="pt-10  border-b border-text-muted mb-8">
      <ul>
        {cart.map((item) => (
          <CartItemsList key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default CartContent;
