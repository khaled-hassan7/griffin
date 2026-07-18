import { categories } from "@/data/mockData";
import CategoryCard from "./CategoryCard";

function Categories() {
  return (
    <div className="grid lg:grid-cols-4 grid-cols-2 gap-y-4  pb-12">
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
}

export default Categories;
