import React from "react";
import { Container } from "@mui/material";

const VisaWelcome = () => {
  return (
    <div className="visa-welcome">
      <Container className="container">
        <div className="container-fluid">
          {/* <label>EPT Academy</label> */}
          {/* <img src="./assets/Logo.png" alt="Air Ceylon Logo" /> */}
          <h1>
            Welcome to Air Ceylon's{" "}
            <span className="gradient-text">VISA Service</span>
          </h1>
          <p style={{ fontWeight: "660", marginBottom: ".6rem" }}>The key to unlock your next journey starts here. </p>

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
