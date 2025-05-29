import React from "react";
import { Container } from "@mui/material";
import { MdVerifiedUser } from "react-icons/md";

const Checkout = () => {
  return (
    <div className="checkout-section">
      <Container maxWidth="lg">
        <div className="card">
          <div className="card-section">
            <form>
              <div className="card-group">
                <h2>
                  PERSONAL <span>INFO</span>
                </h2>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                  />
                </div>
              </div>

              <div className="card-group">
                <h2>
                  SHIPPING <span>ADDRESS</span>
                </h2>
                <div className="row">
                  <div className="form-group" style={{ marginRight: ".8rem" }}>
                    <label>First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                      style={{ padding: ".8rem 8%" }}
                    />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                      style={{ padding: ".8rem 8%" }}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Company (Optional)</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Company Name"
                  />
                </div>
                <div className="form-group">
                  <label>Address</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Address"
                  />
                </div>
                <div className="form-group">
                  <label>City</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="City"
                  />
                </div>
                <div className="form-group">
                  <label>Country</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Country"
                  />
                </div>
                <div className="row">
                  <div className="form-group">
                    <label>Postal Code</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Zip Code"
                      style={{ padding: ".8rem 8%" }}
                    />
                  </div>
                  <div className="form-group" style={{ marginLeft: ".8rem" }}>
                    <label>Telephone</label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Phone"
                      style={{ padding: ".8rem 8%" }}
                    />
                  </div>
                </div>

                <div className="button">
                  <a href="/checkout/no-items" className="text-button">
                    Return to Cart
                  </a>
                  <a
                    href="/checkout/payment-processing"
                    className="btn btn-dark"
                  >
                    Continue
                  </a>
                </div>
              </div>
            </form>
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

export default Checkout;
