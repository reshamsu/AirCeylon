import { Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { FiSend } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="homepage-overlay">
        <img
          src="./assets/Watermark.png"
          className="watermark"
          alt="Watermark"
        />
      </div>

      <Container className="container">
        <div
          className="container">
          <div className="container-fluid">
            <label>Reach Out</label>
            <h1>
              Contact <span>Us</span>
            </h1>
            <h5>
              Email, Call, or complete the form to learn how{" "}
              <Link to="/">Air Ceylon</Link> can find the right solutions for
              you.
            </h5>
            <p>
              <Link>info@airceylonint.com</Link>
            </p>
            <p>
              <Link>94 12 345 6789</Link>
            </p>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="card-title">
                <h1>Get <span>Connected.</span></h1>
              </div>
              <div className="card-text">
                <p>
                  We're here to assist you with any inquires about our solutions
                </p>
              </div>
            </div>
            <form>
              <div className="col">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email Address"
                  />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Your Phone Number"
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <label>Preferred Support System</label>
                  <select className="form-control">
                    <option>Call for Inquries</option>
                    <option>Book an Appointment</option>
                    <option>Register for a Course</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Additional Info</label>
                  <textarea
                    type="text"
                    className="form-control"
                    placeholder="Your Message here..."
                  />
                </div>
              </div>
            </form>
            <button className="btn btn-light">Submit Message <FiSend /> </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
