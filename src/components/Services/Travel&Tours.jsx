import { Container } from "@mui/material";
import React from "react";

const TravelToursHero = () => {
  return (
    <div className="hero-section">
      <div className="homepage-overlay">
        <img
          src="/assets/notarization-section.jpg"
          className="homepage darkened"
        />
      </div>
      <Container className="t&t-hero">
        <div className="container-fluid">
          <h1>
            Travel & <span className="gradient-text">Tours</span>
          </h1>
          <p>Info Travel and Tourism Support</p>
        </div>
      </Container>
    </div>
  );
};

export default TravelToursHero;
