import React, { useEffect } from "react";
import { Container } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const PersonalInfo = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  const REGISTRATION_FEE = 10000;
  const REFUNDABLE_DEPOSIT = product?.name === "Course ZERO (Free)" ? 100000 : 0;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (!product) {
      navigate("/checkout/no-items");
    }
  }, [product, navigate]);

  if (!product) return null;

  const courseFee = Number(product.price) || 0;
  const totalPrice = REGISTRATION_FEE + courseFee + REFUNDABLE_DEPOSIT;

  const onSubmit = (data) => {
    navigate("/checkout/payment", {
      state: {
        product: {
          ...product,
          refundableDeposit: REFUNDABLE_DEPOSIT,
        },
        customerInfo: data,
      },
    });
  };

  return (
    <div className="checkout-section">
      <Container maxWidth="lg">
        <div className="card">
          <div className="card-section">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="card-group">
                <h2>
                  CANDIDATE <span>INFORMATION</span>
                </h2>
                <div className="row">
                  <div className="form-group" style={{ marginRight: ".8rem" }}>
                    <label>
                      First Name<span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                      {...register("firstName", {
                        required: "First name is required",
                      })}
                      style={{ padding: ".8rem 8%" }}
                    />
                    {errors.firstName && (
                      <p className="error-message">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>
                  <div className="form-group">
                    <label>
                      Last Name<span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                      {...register("lastName", {
                        required: "Last name is required",
                      })}
                      style={{ padding: ".8rem 8%" }}
                    />
                    {errors.lastName && (
                      <p className="error-message">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label>
                    Phone Number<span className="required">*</span>
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Your Phone Number"
                    {...register("phone", {
                      required: "{Phone} is required",
                    })}
                  />
                  {errors.phone && (
                    <p className="error-message">{errors.phone.message}</p>
                  )}
                </div>

                <div className="form-group">
                  <label>
                    Gmail Address<span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Gmail Address"
                    {...register("gmail", { required: "Gmail is required" })}
                  />
                  {errors.gmail && (
                    <p className="error-message">{errors.gmail.message}</p>
                  )}
                </div>

                <div className="form-group">
                  <label>
                    Attach file<span className="required">*</span>
                  </label>
                  <input
                    type="file"
                    name="document"
                    accept=".pdf,.jpg,.jpeg,.png"
                    required
                    style={{
                      marginTop: ".2rem",
                      border: "1px solid #d4af37",
                      padding: "0.5rem",
                      borderRadius: "4px",
                      width: "100%",
                      color: "#333",
                    }}
                  />
                </div>

                <div className="button">
                  <button
                    className="text-button"
                    onClick={() =>
                      navigate("/checkout/add-items", { state: { product } })
                    }
                    type="button"
                  >
                    Return to Cart
                  </button>
                  <button className="btn btn-dark" type="submit">
                    Continue
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="card-final">
            <div className="card-summary">
              <h2>YOUR CART</h2>
              <h4>Summary</h4>
              <ul className="summary">
                <li>Selected Course</li>
                <p>{product.name}</p>
              </ul>
              <ul className="summary">
                <li>Registration Fee</li>
                <p>LKR {REGISTRATION_FEE.toLocaleString()}</p>
              </ul>
              <ul className="summary">
                <li>Course Fee</li>
                <p>
                  {courseFee === 0
                    ? "Free"
                    : `LKR ${courseFee.toLocaleString()}`}
                </p>
              </ul>
              {REFUNDABLE_DEPOSIT > 0 && (
                <ul className="summary">
                  <li>Refundable Deposit</li>
                  <p>LKR {REFUNDABLE_DEPOSIT.toLocaleString()}</p>
                </ul>
              )}
              <ul className="final-summary">
                <strong>Total Price</strong>
                <strong>LKR {totalPrice.toLocaleString()}</strong>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PersonalInfo;
