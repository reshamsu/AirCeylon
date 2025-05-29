import { Container } from "@mui/material";
import React from "react";
import { MdVerifiedUser } from "react-icons/md";

const Payment = () => {
  return (
    <div className="checkout-section">
      <Container className="container">
        <div className="card">
          <div className="card-section">
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
                <div className="col">
                  <div className="form-group" style={{ marginRight: ".8rem" }}>
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
              <h3>Accept Terms & Conditions</h3>
              <ul>
                <li>Check Box - Agree to Terms & Conditions</li>
                <li>
                  Check Box - Consent for Personal Data Processing
                  (GDPR-complaint)
                </li>
                <li>Check Box - Acknowledge refund/cancellation policy</li>
              </ul>
            </div>
            <div className="button">
              <a href="/checkout/no-items" className="text-button">
                Return to Cart
              </a>
              <a href="/checkout/thankyou" className="btn btn-dark">
                <MdVerifiedUser /> Pay Now
              </a>
            </div>
          </div>

          <div className="card-final">
            <div className="card-summary">
              <h2>YOUR CART</h2>
              <h4>Summary</h4>
              <ul className="summary">
                <li>Taxes</li>
                <p>$ 0</p>
              </ul>
              <ul className="summary">
                <li>Discounts</li>
                <i>No Discount Applied</i>
              </ul>
              <ul className="summary">
                <li>Total Price</li>
                <p>$ 0</p>
              </ul>
              <ul className="final-summary">
                <strong>Total Price</strong>
                <strong>$ 0</strong>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Payment;
