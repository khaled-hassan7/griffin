import HeaderActions from "./HeaderActions";
import Logo from "../../ui/Logo";
import Menu from "./Menu";
import SearchIcon from "./Search";

function Header() {
  return (
    <header
      className={`fixed top-0 left-0 right-0  z-50 flex justify-between py-5 px-5 text-primary 
    lg:py-7
      lg:grid 
      lg:grid-cols-[1fr_auto_1fr]
      lg:px-12 items-center `}
    >
      <div className={`flex items-center  gap-5  text-primary`}>
        <Menu />
        <div className="lg:hidden">
          <SearchIcon />
        </div>
      </div>
      <div className="w-17.5">
        <Logo />
      </div>

      <div className={`justify-self-end text-primary `}>
        <HeaderActions />
      </div>
    </header>
  );
}

export default Header;
