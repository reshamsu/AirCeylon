import React from "react";
import { Container } from "@mui/material";

const VisaWelcome = () => {
  return (
    <div className="visa-welcome">
      <div className="homepage-overlay">
        <img
          src="./assets/Watermark.png"
          className="watermark"
          alt="Watermark"
        />
      </div>
      <Container className="container">
        <div className="container-fluid">
          {/* <label>EPT Academy</label> */}
          {/* <img src="./assets/Logo.png" alt="Air Ceylon Logo" /> */}
          <h1>
            Welcome to Air Ceylon's{" "}
            <span className="gradient-text">EPT Academy</span>
          </h1>
          <p>The key to unlock your path via IELTS starts here. </p>

          <p>
            Achieve your IELTS goals with personalized, 1-to-1 virtual classes
            for Academic and General candidates. Our courses are tailored to
            your target score, offering individual attention, regular mock
            tests, and full access to ebooks, videos, and practice materials.
            Select the course that fits your needs and begin your path to
            success today.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default VisaWelcome;
