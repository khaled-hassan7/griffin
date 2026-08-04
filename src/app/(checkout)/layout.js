import "@/styles/globals.css";
import CheckoutHeader from "@/components/checkout/CheckoutdHeader";
import DesktopCheckoutSummary from "@/components/checkout/DesktopCheckoutSummary";
import CheckoutProgress from "@/components/checkout/CheckoutProgress";

export default function Layout({ children }) {
  
  return (
    <main className="min-h-screen mx-auto flex ">
      <div className="flex flex-col flex-1 max-w-4xl w-full mx-auto px-4 lg:px-10 ">
        <CheckoutHeader />
        <CheckoutProgress />
        {children}
      </div>
      <DesktopCheckoutSummary />
    </main>
  );
}
