import React from "react";
import { Container } from "@mui/material";

const Testimonials = () => {
  return (
    <Container className="container">
      <div>Testimonials</div>
      <div className="testimonials">
        <div className="card">
          <div className="image">
            <img src="" className="card-img-top" alt="" />
          </div>
          <div className="card-body">
            <h4 className="card-title">For Inquries or Consultations</h4>
            <p className="card-text">Call for more info</p>
            <button>Call Us</button>
          </div>
        </div>

        <div className="card">
          <div className="image">
            <img src="" className="card-img-top" alt="" />
          </div>
          <div className="card-body">
            <h4 className="card-title">
              To Make a visit or For an appointment
            </h4>
            <p className="card-text">Call for more info</p>
            <button>Book Now</button>
          </div>
        </div>

        <div className="card">
          <div className="image">
            <img src="" className="card-img-top" alt="" />
          </div>
          <div className="card-body">
            <h4 className="card-title">To Begin IELTS Training</h4>
            <p className="card-text">
              For more info, learn more on EPT Academy
            </p>
            <button>Register Now</button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Testimonials;
