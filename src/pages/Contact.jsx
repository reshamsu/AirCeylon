import { Container } from "@mui/material";
import React, { useState } from "react";
import { FiSend } from "react-icons/fi";
import { Link } from "react-router-dom";
import { MdAddIcCall } from "react-icons/md";
import { HiOutlineMailOpen } from "react-icons/hi";
import { LuCalendarFold } from "react-icons/lu";
import { IoIosAdd } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const faqs = [
  {
    question: "How do I get started?",
    answer:
      "Yes, we partner with trusted providers to offer optional travel insurance during checkout. It covers trip cancellations, medical emergencies, and lost baggage.",
  },
  {
    question: "What destinations does Air Ceylon serve?",
    answer:
      "AirCeylon offers both domestic and international flights across Asia, Europe, and the Middle East. You can explore our destinations page for a full list.",
  },
  {
    question: "How can I make a booking with Air Ceylon?",
    answer:
      "You can easily book flights through our website, mobile app, or by contacting our customer service. Simply choose your departure and arrival cities, dates, and select your preferred flight.",
  },
  {
    question: "What is the best pricing plan?",
    answer:
      "We allow one carry-on (up to 7kg) and one checked bag (up to 23kg) for economy class. Additional or oversized baggage may incur extra fees. Business class passengers enjoy higher baggage allowances.",
  },
  {
    question: "Can I change or cancel my booking?",
    answer:
      "Yes, most tickets are eligible for changes or cancellations, though fees may apply. Visit our “Manage Booking” section or contact support for assistance.",
  },
];

const Contact = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      <div className="contact-section1">
        <div className="homepage-overlay">
          <img
            src="./assets/Watermark.png"
            className="watermark"
            alt="Watermark"
          />
        </div>

        <Container className="container">
          <div className="container-fluid">
            <label>Connect</label>
            <h1>
              Contact <span className="gradient-text">Us</span>
            </h1>
            <strong>General</strong>
            <div className="info">
              <MdAddIcCall />
              <h5>Phone:</h5>
              <p>
                <Link>+94 760 301 141</Link>
              </p>
            </div>
            <div className="info">
              <HiOutlineMailOpen />
              <h5>Email:</h5>
              <p>
                <Link>info@airceylonint.com</Link>
              </p>
            </div>
            <strong>EPT Academy</strong>
            <div className="info">
              <HiOutlineMailOpen />
              <h5>Email:</h5>
              <p>
                <Link>eptacademy@airceylonint.com</Link>
              </p>
            </div>
            <strong>Business Client</strong>
            <div className="info">
              <HiOutlineMailOpen />
              <h5>Email:</h5>
              <p>
                <Link>alliances@airceylonint.com</Link>
              </p>
            </div>
            <strong>Transition Support (Toronto - Canada)</strong>
            <div className="info">
               <MdAddIcCall />
              <h5>Phone:</h5>
              <p>
                <Link>+1 437 254 3077</Link>
              </p>
            </div>
            <strong>Visit us by appointment:</strong>
            <div className="info">
              <LuCalendarFold className="appoint" />
              <div>
                <p>
                  Wspace - 252A, Galle Road, Colombo 4 (Bambalapitiya), Western
                  Province, Sri Lanka.
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="card-title">
                <h1>
                  Get <span className="gradient-text">Connected.</span>
                </h1>
              </div>
              <div className="card-text">
                <p>
                  We're here to assist you with any inquires about our solutions
                </p>
              </div>
            </div>
            <form>
              <div className="col">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email Address"
                  />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Your Phone Number"
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <label>Preferred Support System</label>
                  <select className="form-control">
                    <option>Call for Inquries</option>
                    <option>Book an Appointment</option>
                    <option>Register for a Course</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Additional Info</label>
                  <textarea
                    type="text"
                    className="form-control"
                    placeholder="Your Message here..."
                  />
                </div>
              </div>
            </form>
            <button className="btn btn-primary">
              Submit Message <FiSend />
            </button>
          </div>
        </Container>
      </div>

      <div className="contact-section2">
        <Container className="container">
          <div className="container-fluid">
            <label>FAQ</label>
            <h1>
              Frequently Asked <span className="gradient-text">Questions</span>
            </h1>
            <div className="container-lg">
              {faqs.map((faq, index) => (
                <div
                  className="card"
                  key={index}
                  style={{ position: "relative" }}
                >
                  <div className="card-body">
                    <h3 className="card-title">{faq.question}</h3>
                    {openIndex === index && (
                      <div className="card-text">
                        <p>{faq.answer}</p>
                        <IoMdClose
                          onClick={() => setOpenIndex(null)}
                          style={{
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                            cursor: "pointer",
                            padding: "6px",
                            fontSize: "2.4rem",
                            margin: "10px 2%",
                          }}
                        />
                      </div>
                    )}
                  </div>
                  {openIndex !== index && (
                    <IoIosAdd onClick={() => setOpenIndex(index)} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Contact;
