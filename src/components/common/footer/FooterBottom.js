const footerLinkClass =
  "transition-colors hover:text-white cursor-pointer relative pr-4   last:pr-0 after:absolute after:right-0 after:top-1/2 after:h-3 after:w-0.5 after:-translate-y-1/2 after:bg-neutral-200 last:after:hidden";

function FooterBottom() {
  return (
    <ul className="flex items-center justify-center gap-x-4 gap-y-2 text-footerLink text-text-muted border-t-[0.5] border-border py-4 mx-auto w-full flex-wrap ">
      <li className={footerLinkClass}> Cookie preferences</li>
      <li className={footerLinkClass}>Privacy policy</li>
      <li className={footerLinkClass}>Purchase conditions</li>
      <li className={footerLinkClass}>Cookies policy</li>
    </ul>
  );
}

export default FooterBottom;
