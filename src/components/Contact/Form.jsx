import { Container } from "@mui/material";
import React, { useState, useEffect } from "react";
import { FiSend } from "react-icons/fi";
import { useLocation } from "react-router-dom";

export default function ContactForm() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("form");

  const tabButtons = [
    { key: "form", label: "Contact Form" },
    { key: "bookappointment", label: "Book Appointment" },
  ];

  const iframeSources = {
    bookappointment:
      "https://api.leadconnectorhq.com/widget/booking/MuBKootQtAyenTNNfQVQ",
  };

  // Form state for inputs
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    additionalInfo: "", // optional
  });

  // Button enabled state
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tabParam = params.get("tab");
    const hash = location.hash.replace("#", "");

    if (tabParam === "bookappointment" || hash === "appointment") {
      setActiveTab("bookappointment");

      setTimeout(() => {
        const el = document.getElementById("appointment");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Validate form inputs except additionalInfo
  useEffect(() => {
    const { firstName, lastName, email, phone, service } = formData;
    const allFilled =
      firstName.trim() !== "" &&
      lastName.trim() !== "" &&
      email.trim() !== "" &&
      phone.trim() !== "" &&
      service.trim() !== "";

    // Basic email validation regex
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    setIsValid(allFilled && emailValid);
  }, [formData]);

  return (
    <div className="contact-form" id="appointment">
      <Container className="container">
        <div className="tab-buttons">
          {tabButtons.map((tab) => (
            <button
              key={tab.key}
              className={`btn ${
                activeTab === tab.key ? "btn-primary" : "btn-outline-primary"
              }`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="card">
          {activeTab === "form" ? (
            <div className="card-form">
              <div className="card-text">
                <h2>
                  Send us a <span className="gradient-text">Message</span>
                </h2>
                <p>We're here to assist you with any inquiries about our solutions</p>
              </div>

              <form>
                <div className="row">
                  <div className="form-group">
                    <label className="gradient-text">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      className="form-control"
                      placeholder="Your First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="gradient-text">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      className="form-control"
                      placeholder="Your Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group">
                    <label className="gradient-text">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="gradient-text">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      className="form-control"
                      placeholder="Your Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="gradient-text">Select Service</label>
                    <select
                      name="service"
                      className="form-control"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="">Select a Service</option>
                      <option>General Inquiry</option>
                      <option>Book an Appointment</option>
                      <option>Register for a Course</option>
                      <option>VISA Application</option>
                      <option>Notarization</option>
                      <option>Transition Support</option>
                      <option>Other Inquiries</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label className="gradient-text">Additional Information</label>
                  <textarea
                    name="additionalInfo"
                    className="form-control"
                    placeholder="Kindly provide any more information regarding your inquiry in order to better assist you…"
                    value={formData.additionalInfo}
                    onChange={handleChange}
                  />
                </div>
                <button
                  className="btn btn-primary"
                  type="submit"
                  disabled={!isValid}
                  style={{
                    opacity: !isValid ? 0.5 : 1,
                    cursor: !isValid ? "not-allowed" : "pointer",
                    pointerEvents: !isValid ? "none" : "auto",
                  }}
                >
                  Send Message <FiSend />
                </button>
              </form>
            </div>
          ) : (
            <div
              className="calendar-booking"
              style={{ width: "100%", height: "840px" }}
            >
              <iframe
                src={iframeSources[activeTab]}
                style={{
                  width: "100%",
                  border: "none",
                  overflow: "hidden",
                  height: "100%",
                }}
                scrolling="no"
                id={`${activeTab}_iframe`}
                title="Booking Calendar"
              ></iframe>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
