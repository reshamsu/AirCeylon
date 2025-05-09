import React from "react";
import { Container } from "@mui/material";

const Express = () => {
  return (
    <div className="express">
      <Container className="container">
        <div className="container-fluid">
          <h2>Express</h2>
        </div>

        <div className="container-lg">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">For Inquries or Consultations</h3>
              <p className="card-text">Call for more info</p>
            </div>
            <button className="btn btn-light">Call Us</button>
          </div>
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">
                To Make a visit for an appointment
              </h3>
              <p className="card-text">Call for more info</p>
            </div>
            <button className="btn btn-light">Book Now</button>
          </div>
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">To Begin IELTS Training</h3>
              <p className="card-text">
                For more info, learn more on EPT Academy
              </p>
            </div>
            <button className="btn btn-light">Register Now</button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Express;
