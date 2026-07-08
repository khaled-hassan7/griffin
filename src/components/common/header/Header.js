import HeaderActions from "./HeaderActions";
import Logo from "./Logo";
import Menu from "./Menu";
import SearchIcon from "./Search";

function Header() {
  return (
    <header
      className="flex justify-between py-5 px-5 border-b border-border 
    lg:py-7
      lg:grid 
      lg:grid-cols-[1fr_auto_1fr]
      lg:px-12 items-center lg:border-none "
    >
      <div className="flex items-center  gap-5 text-text-primary">
        <Menu />
        <div className="lg:hidden">
          <SearchIcon />
        </div>
      </div>

      <Logo />

      <div className="justify-self-end text-text-primary">
        <HeaderActions />
      </div>
    </header>
  );
}

export default Header;
