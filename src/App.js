import "./App.css";
import BannerCarousel from "./Components/BannerCarousel/BannerCarousel";
import Navbar from "./Components/Navbar/Navbar";

function App() {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <BannerCarousel></BannerCarousel>
        </div>
    );
}

export default App;
