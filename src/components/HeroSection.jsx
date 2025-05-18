import React from "react";
import { Container } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HeroSection = () => {
  return (
    <div className="hero-section">
      {/* Hero Carousel */}
      <div className="homepage-overlay">
        <img src="./assets/check.jpg" className="homepage darkened" />

        <img
          src="./assets/Watermark.png"
          className="watermark"
          alt="Watermark"
        />
      </div>

      <Container className="airceylon">
        <div className="container-fluid">
          <h1>
            Discover <span className="gradient-text">Your World</span>
          </h1>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
            varius ipsum. Aenean ex.
          </p> */}
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
