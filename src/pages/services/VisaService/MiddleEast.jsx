import React from "react";
import SubNavbar from "../../../components/SubNavbar";
import { Container } from "@mui/material";

const MiddleEast = () => {
  return (
    <>
      <SubNavbar />

      <div className="services-section">
        <div className="homepage-overlay">
          <img
            src="/assets/middle-east-section.jpg"
            className="homepage darkened"
          />
        </div>
        <Container>
          <div className="container">
            <div className="container-fluid">
              <h1>Visit Middle-East</h1>
              <p>From Visa Services</p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default MiddleEast;
