import CategoryCard from "./CategoryCard";
import { getCategories } from "@/data/categories";

async function Categories() {
  const categories = await getCategories();
  return (
    <div className="grid  grid-cols-1 gap-y-0.5  pb-12 lg:p-2 lg:gap-2 lg:grid-cols-3 ">
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
}

export default Categories;
