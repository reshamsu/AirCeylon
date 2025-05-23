import { Container } from "@mui/material";
import React from "react";

const TransitionSupportWelcome = () => {
  return (
    <div className="ept-academy">
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
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TransitionSupportWelcome;
