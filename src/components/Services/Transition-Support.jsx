import { Container } from "@mui/material";
import React from "react";

const TransitionSupport = () => {
  return (
    <div className="services-section">
      <div className="homepage-overlay">
        <img
          src="/assets/transition-support-section.jpg"
          className="homepage darkened"
        />
      </div>
      <Container>
        <div className="container">
          <div className="container-fluid">
            <h1>Transition Support</h1>
            <p>Info Transitional Support</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TransitionSupport;
