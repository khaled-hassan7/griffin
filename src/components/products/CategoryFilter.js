import { navigationData } from "@/data/navigationData";
import Link from "next/link";

function CategoryFilter({ category }) {
  return (
    <ul className="flex  gap-5 pt-7  pb-4 px-4 text-filterLabel font- text-primary overflow-x-auto scrollbar-none whitespace-nowrap sm:justify-center">
      {navigationData.map((item) => (
        <li key={item.slug} className="shrink-0">
          <Link
            href={`/products?category=${item.slug}`}
            className={category === item.slug ? "font-bold" : ""}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default CategoryFilter;
