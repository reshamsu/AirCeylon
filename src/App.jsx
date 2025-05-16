import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { useMediaQuery } from "react-responsive";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import VisaService from "./pages/services/VisaService/Visa-Services";
import EPTAcademy from "./pages/services/EPT-Academy";
import TransitionSupport from "./pages/services/Transition-Support";
import TravelTours from "./pages/services/Travel&Tours";
import Ticketing from "./pages/services/Ticketing";
import Notarization from "./pages/services/Notarization";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Checkout from "./pages/Checkout";
import Footer from "./components/Footer";
import Countries from "./pages/Countries";
import Europe from "./pages/services/VisaService/Europe";
import Asia from "./pages/services/VisaService/Asia";
import MiddleEast from "./pages/services/VisaService/MiddleEast";
import EastAsia from "./pages/services/VisaService/EastAsia";
import SouthEastAsia from "./pages/services/VisaService/SouthEastAsia";
import "./App.css";

function App() {
  // const isMobile = useMediaQuery({ maxWidth: 1024 });

  return (
    <Router basename="/">
      <div className="Air-Ceylon">
        {/* {isMobile ? <MobileNav /> : <Navbar />} */}
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/visa-service" element={<VisaService />} />
          <Route path="/services/visa-service/countries" element={<Countries />} />
          <Route path="/services/visa-service/europe" element={<Europe />} />
          <Route path="/services/visa-service/asia" element={<Asia />} />
          <Route path="/services/visa-service/middle-east" element={<MiddleEast />} />
          <Route path="/services/visa-service/east-asia" element={<EastAsia />} />
          <Route path="/services/visa-service/south-east-asia" element={<SouthEastAsia />} />
          <Route path="/services/ept-academy" element={<EPTAcademy />} />
          <Route
            path="/services/transition-support"
            element={<TransitionSupport />}
          />
          <Route path="/services/travels-tours" element={<TravelTours />} />
          <Route path="/services/ticketing" element={<Ticketing />} />
          <Route path="/services/notarization" element={<Notarization />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
