import { Container } from "@mui/material";
import React from "react";

const TransitionHero = () => {
  return (
    <div className="hero-section">
      <div className="homepage-overlay">
        <img
          src="/assets/transition-support-section.jpg"
          className="homepage darkened"
        />
      </div>
      <Container className="transition-hero">
          <div className="container-fluid">
            <h1>Transition Support</h1>
          </div>
      </Container>
    </div>
  );
};

export default TransitionHero;
