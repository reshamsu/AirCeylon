import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import VisaService from "./pages/services/Visa-Services";
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
import "./App.css";


function App() {
  return (
    <Router basename="/">
      <div className="Air-Ceylon">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/visa-service" element={<VisaService />} />
          <Route path="/services/ept-academy" element={<EPTAcademy />} />
           <Route path="/services/transition-support" element={<TransitionSupport />} />
          <Route path="/services/travels-tours" element={<TravelTours />} />
          <Route path="/services/ticketing" element={<Ticketing />} />
          <Route path="/services/notarization" element={<Notarization />} />
          <Route path="/contact" element={<Contact />} />
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
