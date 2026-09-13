import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo/logo.svg";
function Logo() {
  return (
    <Link href="/">
      <Image
        src={logo}
        priority
        fetchPriority="high"
        alt="Griffin Logo"
        className={`w-full h-auto p-0 z-100`}
      />
    </Link>
  );
}

export default Logo;
