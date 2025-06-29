import { Container } from "@mui/material";

const Checkout = () => {
  return (
    <div className="checkout-section">
      <Container className="container">
        <div className="card">
          <div className="card-section">
            <div className="container-fluid">
              <h1>
                SHOPPING <span className="gradient-text">CART</span>
              </h1>
              <p>There are no items in your cart</p>
            </div>
          </div>

          <div className="card-final">
            <div className="card-summary">
              <ul className="summary">
                <li>Taxes</li>
                <i>$0</i>
              </ul>
              <ul className="summary">
                <li>Applied discounts or offers</li>
                <i>No Discount Applied</i>
              </ul>
              <ul className="summary">
                <li>Total Price</li>
                <i>$0</i>
              </ul>
              <ul className="final-summary">
                <strong>Total Price</strong>
                <strong>$0</strong>
              </ul>
            </div>
            <div className="button">
              <a href="/checkout/" className="btn btn-dark">
                Checkout
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Checkout;
