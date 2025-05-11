import React from "react";
import { Container } from "@mui/material";

const HeroSection = () => {
  return (
    <div className="hero-section">

      {/* Hero banner */}
      <div className="homepage-overlay">
        <img
          src="./assets/homepage.jpg"
          className="homepage darkened"
          alt="HeroBanner"
        />
                <img
          src="./assets/Logo-AirCeylon.svg"
          className="watermark"
          alt="Watermark"
        />
      </div>
      <Container className="airceylon">
        <div className="container-fluid">
          <h1>
            Discover <span>Your World</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
            varius ipsum. Aenean ex.
          </p>
        </div>
        {/* <div className="button">
          <a href="/about" className="btn btn-light">
            About Us
          </a>
        </div> */}
      </Container>
    </div>
  );
};

export default HeroSection;
