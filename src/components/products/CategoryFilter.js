import Link from "next/link";

function CategoryFilter() {
  return (
    <ul className="flex gap-5 pt-7  pb-4 text-sm font- text-primary ">
      <li>
        <Link href={"/products/all"} className="font-bold">see all</Link>
      </li>
      <li>
        <Link href={"/products/shirts"}>shirts </Link>
      </li>
      <li>
        <Link href={"/products/t-shirts"}>t-shirts </Link>
      </li>
      <li>
        <Link href={"/products/jeans"}>jeans </Link>
      </li>
      <li>
        <Link href={"/products/hodies"}>hodies </Link>
      </li>
    </ul>
  );
}

export default CategoryFilter;
