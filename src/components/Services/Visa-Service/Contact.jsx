import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";

const VisaContact = () => {
  // Form state for each input
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gmail: "",
    phone: "",
    country: "",
    adults: "",
    children: "",
    additionalInfo: "", // optional, so no validation needed here
  });

  // State to control button disabled/enabled
  const [isValid, setIsValid] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Validate required fields whenever formData changes
  useEffect(() => {
    const {
      firstName,
      lastName,
      gmail,
      phone,
      country,
      adults,
      children,
    } = formData;

    // Simple validation: all required fields must be non-empty
    const allFilled =
      firstName.trim() !== "" &&
      lastName.trim() !== "" &&
      gmail.trim() !== "" &&
      phone.trim() !== "" &&
      country.trim() !== "" &&
      adults.trim() !== "" &&
      children.trim() !== "";

    // Optionally you can add email format validation here
    const gmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(gmail);

    setIsValid(allFilled && gmailValid);
  }, [formData]);

  return (
    <div className="visa-contact">
      <Container className="container">
        <div className="container-fluid">
          <h1>
            VISA <span className="gradient-text">Application Form.</span>
          </h1>
          <p>We're here to assist you with any inquires about our solutions</p>
        </div>

        <div className="card">
          <div className="card-form">
            <div className="card-text">
              <h2>
                VISA <span>Service Form</span>
              </h2>
              <p>We're here to assist you with any inquires about our solutions</p>
            </div>

            <form>
              <div className="row">
                <div className="form-group">
                  <label>First Name (Passport)</label>
                  <input
                    type="text"
                    name="firstName"
                    className="form-control"
                    placeholder="First name as per Passport"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Last Name (Passport)</label>
                  <input
                    type="text"
                    name="lastName"
                    className="form-control"
                    placeholder="Last name as per Passport"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="row">
                <div className="form-group">
                  <label>Gmail Address</label>
                  <input
                    type="email"
                    name="gmail"
                    className="form-control"
                    placeholder="Your Gmail Address"
                    value={formData.gmail}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    className="form-control"
                    placeholder="Your Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group">
                  <label>Choose Country</label>
                  <select
                    name="country"
                    className="form-control"
                    value={formData.country}
                    onChange={handleChange}
                  >
                    <option value="">Select a Country</option>
                    <option>Azerbaijan</option>
                    <option>Bahrain</option>
                    <option>Bangladesh</option>
                    <option>Belarus</option>
                    <option>China</option>
                    <option>Egypt</option>
                    <option>Georgia</option>
                    <option>India</option>
                    <option>Indonesia</option>
                    <option>Japan</option>
                    <option>Jordan</option>
                    <option>Kuwait</option>
                    <option>Lebanon</option>
                    <option>Maldives</option>
                    <option>Malaysia</option>
                    <option>Mauritius</option>
                    <option>Morocco</option>
                    <option>Nepal</option>
                    <option>Oman</option>
                    <option>Pakistan</option>
                    <option>Philippines</option>
                    <option>Qatar</option>
                    <option>Saudi Arabia</option>
                    <option>Singapore</option>
                    <option>Thailand</option>
                    <option>Tunisia</option>
                    <option>Turkey</option>
                    <option>UAE</option>
                    <option>Uzbekistan</option>
                    <option>Vietnam</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>No. of Adults</label>
                  <select
                    name="adults"
                    className="form-control"
                    value={formData.adults}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option>1 Adult</option>
                    <option>2 Adults</option>
                    <option>3 Adults</option>
                    <option>4 Adults</option>
                    <option>5 Adults</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>No. of Children</label>
                  <select
                    name="children"
                    className="form-control"
                    value={formData.children}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option>1 Child</option>
                    <option>2 Children</option>
                    <option>3 Children</option>
                    <option>4 Children</option>
                    <option>5 Children</option>
                  </select>
                </div>
              </div>

              <div className="row">
                <div className="form-group">
                  <label>Additional Info</label>
                  <textarea
                    name="additionalInfo"
                    className="form-control"
                    placeholder="Message here..."
                    value={formData.additionalInfo}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <button
                className="btn btn-primary"
                type="submit"
                disabled={!isValid}
              >
                Submit Now
              </button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default VisaContact;
