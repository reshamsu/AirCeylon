import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { useMediaQuery } from "react-responsive";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import About from "./pages/About";
import ItemNone from "./pages/Checkout/ItemNone";
import ItemAdd from "./pages/Checkout/ItemAdd";
import PersonalInfo from "./pages/Checkout/PersonalInfo";
import Payment from "./pages/Checkout/Payment";
import Thank from "./pages/Checkout/Thank";
import Footer from "./components/Footer";
import VisaService from "./pages/VisaService";
import EPTAcademy from "./pages/EPTAcademy";
import TransitionSupport from "./pages/TransitionSupport";
import Notarization from "./pages/Notarization";
import TravelTours from ".//components/Services/Travel&Tours";
import Ticketing from ".//components/Services/Ticketing";
import Europe from "./components/Services/Visa-Service/Countries/Europe";
import Asia from "./components/Services/Visa-Service/Countries/Asia";
import MiddleEast from "./components/Services/Visa-Service/Countries/MiddleEast";
import EastAsia from "./components/Services/Visa-Service/Countries/EastAsia";
import SouthEastAsia from "./components/Services/Visa-Service/Countries/SouthEastAsia";
import "./App.css";

function App() {
  return (
    <Router basename="/">
      <div className="Air-Ceylon">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/visa-service" element={<VisaService />} />
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
          <Route path="/checkout/no-items" element={<ItemNone />} />
          <Route path="/checkout/add-items" element={<ItemAdd />} />
          <Route path="/checkout/personal-info" element={<PersonalInfo />} />
          <Route path="/checkout/payment-processing" element={<Payment />} />
           <Route path="/checkout/thankyou" element={<Thank />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
