import React from "react";
import { Container } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="homepage-overlay">
        <img src="./assets/about.jpg" className="homepage darkened" />
      </div>

      <Container className="airceylon">
        <div className="container-fluid">
          <h1>
            About Us
          </h1>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
