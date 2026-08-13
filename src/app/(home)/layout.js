import CartModal from "@/components/cart/CartModal";
import Footer from "@/components/common/footer/Footer";
import HomeHeader from "@/components/home/HomeHeader";
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
      <HomeHeader />
      {children}
      <Footer />
    </main>
  );
}
