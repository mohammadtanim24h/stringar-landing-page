import "./App.css";
import BannerCarousel from "./Components/BannerCarousel/BannerCarousel";
import ExploreGames from "./Components/ExploreGames/ExploreGames";
import Navbar from "./Components/Navbar/Navbar";

function App() {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <BannerCarousel></BannerCarousel>
            <ExploreGames></ExploreGames>
        </div>
    );
}

export default App;
