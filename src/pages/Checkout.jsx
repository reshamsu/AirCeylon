import { Container } from "@mui/material";
import React from "react";
import { MdVerifiedUser } from "react-icons/md";

const Checkout = () => {
  return (
    <div className="checkout-section">
      <Container className="container">
        <div className="card">
          <div className="card-section">
            <div className="container-fluid">
              <h1>
                <span>Checkout</span>
              </h1>
            </div>

            <div className="card-group">
              <h3 className="gradient-text">Personal Information</h3>
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
              <h3>Service Type</h3>
              <ul>
                <li>Radio Check - Travel Service</li>
                <li>Radio Check - Course Enrollment</li>
              </ul>
            </div>
          </div>

          <div className="card-final">
            <div className="card-summary">
              <h2>Review and Pay</h2>
              <h4>Checkout Summary</h4>
              <ul className="summary">
                <li>Selected service/courses</li>
                <i>Example Service or Course</i>
              </ul>
              <ul className="summary">
                <li>Taxes</li>
                <i>Example Taxes $$$</i>
              </ul>
              <ul className="summary">
                <li>Applied discounts or offers</li>
                <i>Example Promo $$$</i>
              </ul>
              <ul className="summary">
                <li>Total Price</li>
                <i>Example $$$</i>
              </ul>
              <ul className="final-summary">
                <strong>Total Price</strong>
                <strong>Example $$$</strong>
              </ul>
            </div>
            <div className="card-payment">
              <h2>Payment Information</h2>
              <form action="">
                {/* <h4>Payment Method</h4> */}
                <div className="form-group">
                  <label>Credit/Debit Card</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Card Number"
                  />
                </div>
                <div
                  className="col">
                  <div className="form-group">
                    <label>Expiry Date</label>
                    <input
                      type="date"
                      className="form-control"
                      style={{ padding: ".8rem 8%" }}
                    />
                  </div>
                  <div className="form-group">
                    <label>CVV</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Security Code"
                      style={{ padding: ".88rem 8%", width: "100%" }}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Billing Address</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Billing Address"
                  />
                </div>
              </form>
            </div>
            <div className="card-group">
              <h3>Terms & Conditions</h3>
              <ul>
                <li>Check Box - Agree to Terms & Conditions</li>
                <li>
                  Check Box - Consent for Personal Data Processing
                  (GDPT-complaint)
                </li>
                <li>Check Box - Acknowledge refund/cancellation policy</li>
              </ul>
            </div>
            <div className="button">
              <a href="/checkout" className="btn btn-dark">
                <MdVerifiedUser /> Pay Now
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Checkout;
