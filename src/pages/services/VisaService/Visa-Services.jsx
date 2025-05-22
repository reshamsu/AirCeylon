import { Container } from "@mui/material";
import React from "react";
import SubNavbar from "../../../components/SubNavbar";

const VisaServices = () => {
  return (
    <>
      <SubNavbar />

      <div className="services-section">
        <div className="homepage-overlay">
          <img src="/assets/visa-section.jpg" className="homepage darkened" />
        </div>
        <Container>
          <div className="container">
            <div className="container-fluid">
              <h1>
                Visa Services
              </h1>
              <p>Info Visa Services</p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default VisaServices;
