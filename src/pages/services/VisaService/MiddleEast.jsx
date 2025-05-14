import React from "react";
import SubNavbar from "../../../components/SubNavbar";
import { Container } from "@mui/material";

const MiddleEast = () => {
  return (
    <>
      <SubNavbar />

      <div className="services">
        <Container>
          <div className="container">
            <div className="container-fluid">
              <h1>
                Visit <span>Middle-East</span>
              </h1>
              <p>From Visa Services</p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default MiddleEast;
