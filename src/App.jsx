import BrandComponent from "./components/brandComponent/BrandComponent.jsx";

import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
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

export default App;
