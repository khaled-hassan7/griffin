import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo/logo.svg"
function Logo() {
  return (
    <Link href="/">
      <Image
        src={logo}
        alt="Griffin Logo"
        width={70}
        height={70}
        className="text-white p-0"
      />
    </Link>
  );
}

export default Logo;
