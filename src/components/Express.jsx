import React from "react";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";

const Express = () => {
  return (
    <div className="express">
      <Container className="container">
        <div className="container-fluid">
          <label>Connect</label>
          <h1>
           Connnect with <span>Us</span>{" "}
          </h1>
          <h4>
            to Learn More:
          </h4>
        </div>

        <div className="container-lg">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">For Inquries or Consultations</h3>
              <p className="card-text">Call for more info</p>
            </div>
            <Link to="/contact-us" className="btn btn-light">Call Us</Link>
          </div>
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">To Make a visit for an appointment</h3>
              <p className="card-text">Call for more info</p>
            </div>
            <Link to="/services/visa-service" className="btn btn-light">Book Now</Link>
          </div>
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">To Begin IELTS Training</h3>
              <p className="card-text">
                For more info, learn more on EPT Academy
              </p>
            </div>
            <Link to="services/ept-academy" className="btn btn-light">Register Now</Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Express;
