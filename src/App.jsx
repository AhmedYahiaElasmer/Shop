import HomePage from "./PAGES/Home/HomePage.jsx";
import ExplorePage from "./PAGES/Explore/ExplorePage.jsx";
import Navbar from "./components/Layout/Navbar/Navbar.jsx";
import { Route, Routes } from "react-router";
import Footer from "./components/Layout/Footer/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <div className="grid">
        <div className="col-10 col-offset-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Explore" element={<ExplorePage />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
