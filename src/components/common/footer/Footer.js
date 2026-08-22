import FooterBottom from "./FooterBottom";
import FooterMiddle from "./FooterMiddle";
import FooterTop from "./FooterTop";

function Footer() {
  return (
    <footer
      className="bg-primary h-dvh flex flex-col justify-between items-center "
      id="footer"
    >
      <FooterTop />
      <FooterMiddle />
      <FooterBottom />
    </footer>
  );
}

export default Footer;
