import React from "react";
import SubNavbar from "../../../components/SubNavbar";
import { Container } from "@mui/material";

const EastAsia = () => {
  return (
    <>
      <SubNavbar />

      <div className="services-section">
                <div className="homepage-overlay">
          <img src="/assets/east-asia-section.jpg" className="homepage darkened" />
        </div>
        <Container>
          <div className="container">
            <div className="container-fluid">
              <h1>
                Visit <span className="gradient-text">East Asia</span>
              </h1>
              <p>From Visa Services</p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default EastAsia;
