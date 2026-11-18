import { getAccountOrders } from "@/data/accounts";
import OrdersList from "@/components/accounts/OrdersList";

async function page() {
  const orders = await getAccountOrders();

  return (
    <div className="max-w-3xl px-6 py-10 lg:py-16">
      <h2 className="hidden lg:block text-formHeading font-bold uppercase tracking-widest pb-10">
        Orders
      </h2>
      <OrdersList orders={orders} />
    </div>
  );
}

export default page;
