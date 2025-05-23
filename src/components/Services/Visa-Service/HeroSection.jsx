import { Container } from "@mui/material";
import React from "react";
import SubNavbar from "../../SubNavbar";

const VisaHeroSection = () => {
  return (
    <>
      <SubNavbar />

      <div className="services-section">
        <div className="homepage-overlay">
          <img src="/assets/visa-section.avif" className="homepage darkened" />
        </div>
        <Container>
          <div className="container">
            <div className="container-fluid">
              <h1>VISA Service</h1>
              <p>Info VISA Service</p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default VisaHeroSection;
