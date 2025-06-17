import { Container } from "@mui/material";
import React, { useState } from "react";
import { FiSend } from "react-icons/fi";

// Main component
export default function ContactForm() {
  const [activeTab, setActiveTab] = useState("form");

  const tabButtons = [
    { key: "form", label: "Contact Form" },
    { key: "visa", label: "Visa Service" },
    { key: "ept", label: "EPT Academy" },
    { key: "notaries", label: "Notarization" },
  ];

  const iframeSources = {
    visa: "https://api.leadconnectorhq.com/widget/booking/jB6lhfWOEyrlzpm5uplC",
    ept: "https://api.leadconnectorhq.com/widget/booking/c97GfuHSgiwbqGb3EtUu",
    notaries: "https://api.leadconnectorhq.com/widget/booking/Rr0SH6ErZX4quHKFLmTH",
  };

  return (
    <div className="contact-form">
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
                  Send us a <span className="gradient-text">Message.</span>
                </h2>
                <p>
                  We're here to assist you with any inquiries about our
                  solutions
                </p>
              </div>

              <form>
                <div className="row">
                  <div className="form-group">
                    <label className="gradient-text">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="form-group">
                    <label className="gradient-text">Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group">
                    <label className="gradient-text">Phone</label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Your Phone Number"
                    />
                  </div>
                  <div className="form-group">
                    <label className="gradient-text">
                      Preferred Support System
                    </label>
                    <select className="form-control">
                      <option>Call for Inquiries</option>
                      <option>Book an Appointment</option>
                      <option>Register for a Course</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label className="gradient-text">Additional Info</label>
                  <textarea
                    className="form-control"
                    placeholder="Message here..."
                  />
                </div>
                <button className="btn btn-primary" type="submit">
                  Send Message <FiSend />
                </button>
              </form>
            </div>
          ) : (
            <div
              className="calendar-booking"
              style={{ width: "100%", height: "800px" }}
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
                id={`${activeTab}_widget`}
                title={`${activeTab} Widget`}
              ></iframe>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
