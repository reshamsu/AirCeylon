import React from "react";
import { Container } from "@mui/material";
import { FaCommentDots } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa6";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <Container className="container">
        <div className="container-fluid">
          <label>Testimonials</label>
        
          <h1>What Our <span>Travelers Say</span> <FaCommentDots style={{ marginLeft: "6px", fontSize: '3rem',color: 'var(--text-gold-hover)' }} /></h1>
          <h4>
            At Air Ceylon, your journey is our passion. - see what our guests
            have to say.
          </h4>
        </div>

        <div className="container-lg">
          <div className="card">
            <img src="./assets/profile1.png" alt="" style={{ width: '24%', background: '#fff', borderRadius: '100%' }}></img>
            <div className="image">
              <img src="" className="card-img-top" alt="" />
            </div>
            <div className="card-body">
              <h4 className="card-title"><FaQuoteLeft />For Inquries or Consultations <FaQuoteRight /></h4>
              <p className="card-text">Call for more info</p>
            </div>
          </div>

          <div className="card">
            <div className="image">
              <img src="" className="card-img-top" alt="" />
            </div>
            <div className="card-body">
              <h4 className="card-title"><FaQuoteLeft />For Inquries or Consultations <FaQuoteRight /></h4>
              <p className="card-text">Call for more info</p>
            </div>
          </div>

          <div className="card">
            <div className="image">
              <img src="" className="card-img-top" alt="" />
            </div>
            <div className="card-body">
              <h4 className="card-title"><FaQuoteLeft />For Inquries or Consultations <FaQuoteRight /></h4>
              <p className="card-text">
                For more info, learn more on EPT Academy
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
