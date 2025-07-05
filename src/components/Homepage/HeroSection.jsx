import React from "react";
import { Container } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const LandingHero = () => {
  return (
    <div className="hero-section">
      <div className="homepage-overlay">
        <img src="./assets/check.jpg" className="homepage darkened" />

        {/* <img
          src="./assets/Watermark.png"
          className="watermark"
          alt="Watermark"
        /> */}
      </div>

      <Container className="landing-hero">
        <div className="container-fluid">
          <h1>
            Beyond <span className="gradient-text">Travelling</span>
          </h1>
        </div>
      </Container>
    </div>
  );
};

export default LandingHero;
