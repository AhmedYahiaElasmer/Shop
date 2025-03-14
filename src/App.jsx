import HomePage from "./PAGES/Home/HomePage.jsx";
import ExplorePage from "./PAGES/Explore/ExplorePage.jsx";
import Navbar from "./components/Layout/Navbar/Navbar.jsx";

function App() {
  return (
    <>
      <Navbar />
      <div className="grid">
        <div className="col-8 col-offset-2">
          {/* <HomePage /> */}
          <ExplorePage />
        </div>
      </div>
    </>
  );
}

export default App;
