import React from "react";
import SubNavbar from "../../../components/SubNavbar";
import { Container } from "@mui/material";

const Asia = () => {
  return (
    <>
      <SubNavbar />

      <div className="services-section">
        <Container>
          <div className="container">
            <div className="container-fluid">
              <h1>
                Visit <span>Asia</span>
              </h1>
              <p>From Visa Services</p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Asia;
