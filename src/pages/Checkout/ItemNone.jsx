import { Container } from "@mui/material";
import React from "react";
import { MdVerifiedUser } from "react-icons/md";

const Checkout = () => {
  return (
    <div className="checkout-section">
      <Container maxWidth="lg">
        <div className="card">
          <div className="card-section">
            <div className="card-group">
              <h1>
                SHOPPING <span className="gradient-text">CART</span>
              </h1>
              <p>There are no items in your cart</p>
            </div>
          </div>

          <div className="card-final" style={{ borderRadius: "10px" }}>
            <div className="card-summary">
              <h2>YOUR CART</h2>
              <h4>Summary</h4>
              <ul className="summary">
                <li>Registration Fee</li>
                <li>LKR 10,000</li>
              </ul>
              <ul className="summary">
                <li>Course Fee</li>
                <li>LKR 0</li>
              </ul>
              <ul className="final-summary">
                <strong>Subtotal</strong>
                <strong>LKR 0</strong>
              </ul>
              <ul className="final-summary">
                <strong>Total Price</strong>
                <strong>LKR 0</strong>
              </ul>
            </div>
            <div className="button">
              <button className="btn btn-dark">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Checkout;
