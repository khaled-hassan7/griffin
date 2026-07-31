import CartModal from "@/components/cart/CartModal";
import Footer from "@/components/common/footer/Footer";
import Header from "@/components/common/header/Header";
import NavigationMenu from "@/components/navigation/Navigation";


export const metadata = {
  title: "griffin",
  description: "Modern Clothing Store",
};

export default function RootLayout({ children }) {
  return (
    <main className="min-h-screen flex flex-col m-auto">
      <CartModal />
      <NavigationMenu />
      <Header />
      {children}
      <Footer />
    </main>
  );
}
