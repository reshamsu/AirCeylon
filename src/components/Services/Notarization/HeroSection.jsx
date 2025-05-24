import { Container } from "@mui/material";
import React from "react";

const NotariesHero = () => {
  return (
    <div className="hero-section">
      <div className="homepage-overlay">
        <img
          src="/assets/notarization-section.jpg"
          className="homepage darkened"
        />
      </div>
      <Container className="notaries-hero">
        <div className="container-fluid">
          <h1>Notarization</h1>
          <p>Info Notarization, Authetication, Verification</p>
        </div>
      </Container>
    </div>
  );
};

export default NotariesHero;
