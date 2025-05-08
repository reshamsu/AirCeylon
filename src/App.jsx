import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/HeroSection";
import Services from "./pages/Services";
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
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path="/services"
            element={
              <>
                <Navbar />
                <Services />
                <Footer />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Navbar />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route
            path="/blog"
            element={
              <>
                <Navbar />
                <Blog />
                <Footer />
              </>
            }
          />
          <Route
            path="/about-us"
            element={
              <>
                <Navbar />
                <About />
                <Footer />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Navbar />
                <Checkout />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
