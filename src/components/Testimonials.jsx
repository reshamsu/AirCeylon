import React from "react";
import { Container } from "@mui/material";
import { FaCommentDots } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <Container className="container">
        <div className="container-fluid">
          <label>Testimonials</label>
          <FaCommentDots style={{ marginRight: "10px", color: "#1976d2" }} />
          <h1>What Our Travelers Say</h1>
          <h4>
            At Air Ceylon, your journey is our passion. - see what our guests
            have to say.
          </h4>
        </div>

        <div className="container-lg">
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
    </div>
  );
};

export default Testimonials;
