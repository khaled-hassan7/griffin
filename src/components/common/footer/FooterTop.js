import Image from "next/image";
import logo from "@/assets/images/logo/logo.svg";

function FooterTop() {
  return (
    <div className="bg-primary w-full flex justify-center pt-20 lg:pt-24  px-5  ">
      <Image
        src={logo}
        alt="Griffin Logo"
        width={600}
        height={120}
        className="text-white p-0"
      />
    </div>
  );
}

export default FooterTop;
