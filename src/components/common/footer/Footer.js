import { Suspense } from "react";
import FooterBottom from "./FooterBottom";
import FooterMiddle from "./FooterMiddle";
import FooterTop from "./FooterTop";
import { getEditorialCollection } from "@/data/collections";

// Only the data-dependent top section suspends. The outer <footer> below stays
// in the initial server-rendered shell, so #footer exists from the first chunk
// and the header intersection observers attach as before.
async function FooterTopWithData() {
  const newArrivalsCollection = await getEditorialCollection("new-arrivals");
  return <FooterTop newArrivalsCollection={newArrivalsCollection} />;
}

// Visual twin of FooterTop's root element: same background, padding, overflow
// and `flex-1` sizing, so it occupies exactly the box the resolved FooterTop
// will occupy and there is no size jump when the boundary swaps in.
function FooterTopFallback() {
  return (
    <div className="bg-primary w-full pt-20 lg:pt-24 relative overflow-hidden flex items-center justify-center flex-1" />
  );
}

function Footer() {
  return (
    <footer
      className="bg-primary h-dvh flex flex-col justify-between items-center "
      id="footer"
    >
      <Suspense fallback={<FooterTopFallback />}>
        <FooterTopWithData />
      </Suspense>
      <FooterMiddle />
      <FooterBottom />
    </footer>
  );
}

export default Footer;
