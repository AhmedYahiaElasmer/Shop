import BrandComponent from "../../components/brandComponent/BrandComponent";

function HomePage() {
  return (
    <>
      <div className="flex align-items-center justify-content-center  ">
        <BrandComponent />
      </div>
      <div className="flex align-items-center justify-content-center ">
        <BrandComponent />
      </div>
      <div className="flex align-items-center justify-content-center ">
        <BrandComponent />
      </div>
    </>
  );
}

export default HomePage;
