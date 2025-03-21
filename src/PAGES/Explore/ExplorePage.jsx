import CategoryCard from "../../components/cardComponent/CategoryCard/CategoryCard";
import CategoriesComponent from "../../components/categoriesComponent/CategoriesComponent";

function ExplorePage() {
  return (
    <div>
      <div className="flex gap-2 flex-wrap  align-items-center justify-content-center ">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
      <div className="flex gap-2 flex-wrap  align-items-center justify-content-center ">
        <CategoriesComponent />
        <CategoriesComponent />
        <CategoriesComponent />
      </div>
    </div>
  );
}

export default ExplorePage;
