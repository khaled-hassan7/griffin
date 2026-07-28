import CartModal from "@/components/cart/CartModal";
import Footer from "@/components/common/footer/Footer";
import Header from "@/components/common/header/Header";
import NavigationMenu from "@/components/navigation/Navigation";

import "@/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "griffin",
  description: "Modern Clothing Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`min-h-screen flex flex-col m-auto ${inter.className} `}>
        <CartModal />
        <NavigationMenu />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
