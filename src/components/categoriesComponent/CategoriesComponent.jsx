import { Button } from "primereact/button";
import ExploreCard from "../cardComponent/EploreCard/ExploreCard";

function CategoriesComponent() {
  return (
    <div className="flex flex-column flex-wrap  align-items-start justify-content-center align-content-center ">
      <div className="flex gap-1 align-items-center justify-content-center">
        <div>
          <h2>Beauty</h2>
        </div>
        <div>
          <Button
            icon="pi pi-angle-right"
            rounded
            text
            raised
            severity="secondary"
            aria-label="Bookmark"
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        <ExploreCard />
        <ExploreCard />
        <ExploreCard />
        <ExploreCard />
        <ExploreCard />
        <ExploreCard />
        <ExploreCard />
      </div>
    </div>
  );
}

export default CategoriesComponent;
