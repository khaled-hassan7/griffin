import FooterBottom from "./FooterBottom";
import FooterMiddle from "./FooterMiddle";
import FooterTop from "./FooterTop";
import { getEditorialCollection } from "@/data/collections";

async function Footer() {
  const newArrivalsCollection = await getEditorialCollection("new-arrivals");

  return (
    <footer
      className="bg-primary h-dvh flex flex-col justify-between items-center "
      id="footer"
    >
      <FooterTop newArrivalsCollection={newArrivalsCollection} />
      <FooterMiddle />
      <FooterBottom />
    </footer>
  );
}

export default Footer;
