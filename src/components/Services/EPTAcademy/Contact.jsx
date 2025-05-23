import { Container } from "@mui/material";
import React, { useState } from "react";
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

const Contact = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      <div className="ept-contact">
        <Container className="container">
          <div className="card">
            <div className="card-body">
              <h1>
                <span>
                  For More Inquires Reach Out to Us!
                </span>
              </h1>
              <p>
                We're here to assist you with any inquires about our solutions
              </p>
              <div className="card-group">
                <div className="col">
                  <a href="tel:+94760301141" className="btn btn-primary">
                    <IoCall /> Call
                  </a>

                  <a
                    href="mailto:eptacademy@airceylonint.com"
                    className="btn btn-primary"
                  >
                    <MdEmail /> Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Contact;
