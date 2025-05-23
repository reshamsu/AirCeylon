import { Container } from "@mui/material";
import React from "react";

const Notarization = () => {
  return (
    <div className="services-section">
      <div className="homepage-overlay">
        <img
          src="/assets/notarization-section.jpg"
          className="homepage darkened"
        />
      </div>
      <Container>
        <div className="container">
          <div className="container-fluid">
            <h1>Notarization</h1>
            <p>Info Notarization, Authetication, Verification</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Notarization;
