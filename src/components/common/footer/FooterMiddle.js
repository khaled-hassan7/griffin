const footerLinkClass =
  "text-text-muted transition-colors  hover:text-primary cursor-pointer text-xs ";

function FooterSection({ children, title }) {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-sm text-text-white font-bold">{title}</h2>
      <ul className="flex flex-col gap-5">{children}</ul>
    </div>
  );
}

function FooterTop() {
  return (
    <div className="flex justify-center mx-auto pt-10 pb-20 gap-5 sm:gap-15  border-border ">
      <FooterSection title="Help">
        <li className={footerLinkClass}>FAQs</li>
        <li className={footerLinkClass}>Processing a return</li>
        <li className={footerLinkClass}>Contact</li>
      </FooterSection>
      <FooterSection title="Company">
        <li className={footerLinkClass}>About us</li>
        <li className={footerLinkClass}>Work with us</li>
      </FooterSection>
      <FooterSection title="Social">
        <li className={footerLinkClass}>Tiktok</li>
        <li className={footerLinkClass}>Instagram</li>
        <li className={footerLinkClass}>Facebook</li>
        <li className={footerLinkClass}>X</li>
        <li className={footerLinkClass}>Youtube</li>
        <li className={footerLinkClass}>Pinterest</li>
      </FooterSection>
    </div>
  );
}

export default FooterTop;
