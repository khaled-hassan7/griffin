import HeaderActions from "./HeaderActions";
import Logo from "../../ui/Logo";
import Menu from "./Menu";
import SearchIcon from "./Search";

function Header() {
  return (
    <header
      className="fixed top-0 left-0 right-0  z-50 flex justify-between py-5 px-5 border-b border-border text-primary
    lg:py-7
      lg:grid 
      lg:grid-cols-[1fr_auto_1fr]
      lg:px-12 items-center lg:border-none "
    >
      <div className="flex items-center  gap-5 ">
        <Menu />
        <div className="lg:hidden">
          <SearchIcon />
        </div>
      </div>

      <Logo />

      <div className="justify-self-end ">
        <HeaderActions />
      </div>
    </header>
  );
}

export default Header;
