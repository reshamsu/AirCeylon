import { Container } from "@mui/material";
import React from "react";

const Checkout = () => {
  return (
    <div className="checkout-section">
      <Container className="landing-hero">
        <div className="card">
          <div className="card-section">
            <div className="container-fluid">
              <h1>
                <span className="gradient-text">CheckOut</span>
              </h1>
            </div>

            <div className="card-group">
              <h2>Personal Information</h2>
              <form action="">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full Name"
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                  />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="form-group">
                  <label>Date of Birth</label>
                  <input type="date" className="form-control" />
                </div>
                <div className="form-group">
                  <label>Nationality</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nationality/Country of Residence"
                  />
                </div>
              </form>
            </div>

            <div className="card-group">
              <h2>Service Type</h2>
              <div className="form-check">
                <input className="form-check-input" type="radio"></input>
              </div>
              <ul>
                <li>Radio Check - Travel Service</li>
                <li>Radio Check - Course Enrollment</li>
              </ul>
            </div>

            <div className="card-group">
              <h2>Payment Information</h2>
              <form action="">
                <div className="form-group">
                  <h4>Payment Method</h4>
                  <div className="row">
                    <label>Credit/Debit Card</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Card Number"
                    />
                  </div>
                  <div className="row">
                    <div className="col">
                      <label>Expiry Date</label>
                      <input type="date" className="form-control" />
                    </div>
                    <div className="col">
                      <label>CVV</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Security Code"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <label>Billing Address</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Billing Address"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="card-section">
            <div className="card-group">
              <h2>Terms & Conditions</h2>
              <ul>
                <li>Check Box - Agree to Terms & Conditions</li>
                <li>
                  Check Box - Consent for Personal Data Processing
                  (GDPT-complaint)
                </li>
                <li>Check Box - Acknowledge refund/cancellation policy</li>
              </ul>
            </div>

            <div className="card-group">
              <h2>Review and Submit</h2>
              <ul>
                <h4>Checkout Summary</h4>
                <li>Selected service/courses</li>
                <li>Total cost</li>
                <li>Taxes</li>
                <li>Applied discounts or offers</li>
              </ul>
            </div>
            <div className="button">
              <a
                href="/checkout"
                className="btn btn-dark"
                style={{ width: "100%" }}
              >
                Pay Now
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Checkout;
