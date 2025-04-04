import HomePage from "./PAGES/Home/HomePage.jsx";
import ExplorePage from "./PAGES/Explore/ExplorePage.jsx";
import ProductPage from "./PAGES/Product/ProductPage.jsx";
import Navbar from "./components/Layout/Navbar/Navbar.jsx";
import { Route, Routes } from "react-router";
import Footer from "./components/Layout/Footer/Footer.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 w-screen">
        <div>
          <div>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/Explore" element={<ExplorePage />} />
              <Route path="/product/:id" element={<ProductPage />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
