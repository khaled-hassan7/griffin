import { getCollectionProducts } from "@/data/helpers";
import FooterBottom from "./FooterBottom";
import FooterMiddle from "./FooterMiddle";
import FooterTop from "./FooterTop";
import { getCollections } from "@/data/collections";

async function Footer() {
  const newArrivalsCollection = await getCollections("new-arrivals");

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
