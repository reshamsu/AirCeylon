import React from "react";
import SubNavbar from "../../../components/SubNavbar";
import { Container } from "@mui/material";

const SouthEastAsia = () => {
  return (
    <>
      <SubNavbar />

      <div className="services-section">
                <div className="homepage-overlay">
          <img src="/assets/south-east-asia-section.webp" className="homepage darkened" />
        </div>
        <Container>
          <div className="container">
            <div className="container-fluid">
              <h1>
                Visit South East-Asia
              </h1>
              <p>From Visa Services</p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default SouthEastAsia;
