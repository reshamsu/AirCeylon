import { Container } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  const REGISTRATION_FEE = 10000;

  if (!product) {
    navigate("/checkout/no-items");
    return null;
  }

  const courseFee = Number(product.price) || 0; // Ensure numeric
  const total = REGISTRATION_FEE + courseFee;

  const handleCheckout = () => {
    navigate("/checkout/personal-info", { state: { product } });
  };

  return (
    <div className="checkout-section">
      <Container maxWidth="lg">
        <div className="card">
          <div className="card-section">
            <div className="container-fluid">
              <h1>
                SHOPPING <span className="gradient-text">CART</span>
              </h1>
              <p>
                You have selected: <strong>{product.name}</strong>
              </p>
            </div>
          </div>

          <div className="card-final" style={{ borderRadius: "10px" }}>
            <div className="card-summary">
              <h2>YOUR CART</h2>
              <h4>Summary</h4>
              <ul className="summary">
                <li>Registration Fee</li>
                <li>LKR {REGISTRATION_FEE.toLocaleString()}</li>
              </ul>
              <ul className="summary">
                <li>Course Fee</li>
                <li>{courseFee === 0 ? "Free" : `LKR ${courseFee.toLocaleString()}`}</li>
              </ul>
              <ul className="final-summary">
                <strong>Subtotal</strong>
                <strong>LKR {total.toLocaleString()}</strong>
              </ul>
              <ul className="final-summary">
                <strong>Total Price</strong>
                <strong>LKR {total.toLocaleString()}</strong>
              </ul>
            </div>
            <div className="button">
              <button onClick={handleCheckout} className="btn btn-dark">
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
