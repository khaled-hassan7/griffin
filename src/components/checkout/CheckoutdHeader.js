import Logo from "../ui/Logo";

function checkoutHeader() {
  return (
    <div className=" flex py-5 items-center justify-center lg:py-7 ">
      <div className="w-15">
        <Logo />
      </div>
    </div>
  );
}

export default checkoutHeader;
