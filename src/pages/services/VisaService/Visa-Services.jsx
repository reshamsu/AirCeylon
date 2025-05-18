import { Container } from "@mui/material";
import React from "react";
import SubNavbar from "../../../components/SubNavbar";

const VisaServices = () => {
  return (
    <>
      <SubNavbar />

      <div className="services-section">
        <Container>
          <div className="container">
            <div className="container-fluid">
              <h1>
                Visa <span className="gradient-text">Services</span>
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
