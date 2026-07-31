import CheckoutForm from "@/components/checkout/CheckoutForm";
import CheckoutGuard from "@/components/checkout/CheckoutGuard";

function page() {
  return (
    <CheckoutGuard>
      <CheckoutForm />
    </CheckoutGuard>
  );
}

export default page;
