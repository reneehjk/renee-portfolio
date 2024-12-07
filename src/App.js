import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import NavBar from "./components/Navbar";
import { WebPortfolio } from "./pages/Portfolio";
import { ManPortfolio } from "./pages/Portfolio";
import { DesPortfolio } from "./pages/Portfolio";
import { AllPortfolio } from "./pages/Portfolio";
import About from "./pages/About";
import Marketing from "./pages/Marketing";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="select-none bg-gradient-to-r from-white to-lightBeige min-h-screen space-y-10">
        <div className="flex lg:flex-row flex-col justify-start">
          <div className="flex justify-center lg:pl-[150px] lg:pr-[100px]">
            <NavBar />
          </div>
          <div className="">
            <Routes>
              <Route path="/" element={<AllPortfolio />} />
              <Route path="/web" element={<WebPortfolio />} />
              <Route path="/management" element={<ManPortfolio />} />
              <Route path="/design" element={<DesPortfolio />} />
              <Route path="/marketing" element={<Marketing />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
        <Contact />
      </div>
    </Router>
  );
}

export default App;
