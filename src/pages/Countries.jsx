import React from "react";
import SubNavbar from "../components/SubNavbar";
import { Container } from "@mui/material";

const Countries = () => {
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
                View Countries
              </h1>
              <p>from Visa Services</p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Countries;
