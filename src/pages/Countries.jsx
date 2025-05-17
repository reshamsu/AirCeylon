import React from "react";
import SubNavbar from "../components/SubNavbar";
import { Container } from "@mui/material";

const Countries = () => {
  return (
    <>
      <SubNavbar />

      <div className="services-section">
        <Container className="container">
            <div className="container-fluid">
              <h1>
               View <span>Countries</span>
              </h1>
              <p>from Visa Services</p>
            </div>
        </Container>
      </div>
    </>
  );
};

export default Countries;
