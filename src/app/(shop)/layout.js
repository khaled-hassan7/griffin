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
      <body className={`min-h-full flex flex-col ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
