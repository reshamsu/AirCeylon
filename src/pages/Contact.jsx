import { Container } from "@mui/material";
import React, { useState, useEffect } from "react";
import { FiSend } from "react-icons/fi";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
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

// ImageSlider Component
const ImageSlider = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, [current]);

  return (
    <div
      className="image-slider"
      style={{
        position: "relative",
        width: "300px",
        height: "200px",
        overflow: "hidden",
        borderRadius: "12px",
        marginBottom: "1rem",
      }}
    >
      <img
        src={images[current]}
        alt={`slide-${current}`}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "12px",
          transition: "all 0.5s ease-in-out",
        }}
      />
      <button
        onClick={prevSlide}
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.5)",
          color: "#fff",
          border: "none",
          padding: "6px 10px",
          borderRadius: "50%",
          cursor: "pointer",
        }}
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.5)",
          color: "#fff",
          border: "none",
          padding: "6px 10px",
          borderRadius: "50%",
          cursor: "pointer",
        }}
      >
        ›
      </button>
    </div>
  );
};

const Contact = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      <div className="contact-section">
        <Container className="container">
          <div className="container-fluid">
            <h1>
              Get <span className="gradient-text">Connected.</span>
            </h1>
            <p>We're here to assist you with any inquires about our solutions</p>
          </div>

          <div className="card">
            <div className="card-body">
              <h2>
                Contact <span>Information</span>
              </h2>
              <p>We're here to assist you with any inquires about our solutions</p>

              <div className="card-group">
                <h4>General Inquiries</h4>
                <ul>
                  <li>
                    <IoCall />
                    <a href="tel:+94760301141">+94 760 301 141</a>
                  </li>
                  <li>
                    <MdEmail />
                    <a href="mailto:info@airceylonint.com">info@airceylonint.com</a>
                  </li>
                </ul>
              </div>

              <div className="card-group">
                <h4>EPT Academy</h4>
                <ul>
                  <li>
                    <IoCall />
                    <a href="tel:+94760301141">+94 760 301 141</a>
                  </li>
                  <li>
                    <MdEmail />
                    <a href="mailto:eptacademy@airceylonint.com">
                      eptacademy@airceylonint.com
                    </a>
                  </li>
                </ul>
              </div>

              <div className="card-group">
                <h4>Business Client</h4>
                <ul>
                  <li>
                    <IoCall />
                    <a href="tel:+94760301141">+94 760 301 141</a>
                  </li>
                  <li>
                    <MdEmail />
                    <a href="mailto:alliances@airceylonint.com">
                      alliances@airceylonint.com
                    </a>
                  </li>
                </ul>
              </div>

              <div className="card-group">
                <h4>Transition Support</h4>
                <ul>
                  <li>
                    <IoCall />
                    <a href="tel:+14372543077">+1 437 254 3077</a>
                  </li>
                  <li>
                    <MdEmail />
                    <a href="mailto:info@airceylonint.com">
                      info@airceylonint.com
                    </a>
                  </li>
                </ul>
              </div>

              <div className="card-group">
                <h4>Visit us by appointment:</h4>
                <ImageSlider
                  images={[
                    "/assets/office-desk.jpeg",
                    "/assets/office-counter.jpeg",
                  ]}
                />
                <ul>
                  <li>
                    <FaLocationDot />
                    <a
                      href="https://www.google.com/maps?q=WSPACE+-+252A,+GALLE+ROAD,+COLOMBO+4+(Bambalapitiya),+Western+Province,+Sri+Lanka"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Wspace - 252A, Galle Road, Colombo 4 (Bambalapitiya), Western Province,
                      Sri Lanka.
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="card-form">
              <div className="card-text">
                <h1>
                  Send us a <span className="gradient-text">Message.</span>
                </h1>
                <p>We're here to assist you with any inquires about our solutions</p>
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
                      <option>Call for Inquires</option>
                      <option>Book an Appointment</option>
                      <option>Register for a Course</option>
                    </select>
                  </div>
                </div>

                <div className="row">
                  <div className="form-group">
                    <label className="gradient-text">Additional Info</label>
                    <textarea
                      type="text"
                      className="form-control"
                      placeholder="Message here..."
                    />
                  </div>
                </div>
                <button className="btn btn-primary">
                  Send Message <FiSend />
                </button>
              </form>
            </div>
          </div>
        </Container>
      </div>

      <div className="faq-section">
        <Container className="container">
          <div className="container-fluid">
            <label>FAQ</label>
            <h1>
              Frequently Asked <span className="gradient-text">Questions</span>
            </h1>
            <div className="container-lg">
              {faqs.map((faq, index) => (
                <div className="card" key={index} style={{ position: "relative" }}>
                  <div className="card-body">
                    <h4 className="card-title">{faq.question}</h4>
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
