import React from "react";
import { Container } from "@mui/material";
import { FaCommentDots } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa6";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <Container className="container">
        <div className="container-fluid">
          <h1>
            Experience with <span>Air Ceylon</span> <FaCommentDots />
          </h1>
        </div>

        <div className="container-lg">
          <div className="card">
            <label>Business Client</label>
            <div className="card-body">
              <h4 className="card-title">
                <FaQuoteLeft />
                At Hive Colombo, we navigate through any travel related
                activities seamlessly and confidently via Air Ceylon. Their
                expertise, partnerships and commitment is unique but more
                importantly a reliable & valuable travel solution.
                <FaQuoteRight />
              </h4>
              <p className="card-text">Hive Colombo</p>
            </div>
          </div>

          <div className="card">
            <label>EPT Academy</label>
            <div className="card-body">
              <h4 className="card-title">
                <FaQuoteLeft />
                As a frequent traveler, I value efficiency, reliability, and
                local insight. Air Ceylon not only helped me navigate multiple
                destinations across Asia and Europe, but also offered curated
                itineraries that exceeded expectations. A truly trusted travel
                partner.
                <FaQuoteRight />
              </h4>
              <p className="card-text">IELTS Student</p>
            </div>
          </div>

          <div className="card">
            <label>Transition Support</label>
            <div className="card-body">
              <h4 className="card-title">
                <FaQuoteLeft />
                The level of personalized service Air Ceylon provides is
                unparalleled. Their attention to detail, swift communication,
                and thoughtful recommendations made my corporate retreat both
                productive and enjoyable. Highly recommended for premium travel
                needs. <FaQuoteRight />
              </h4>
              <p className="card-text">Resident from Toronto - Canada.</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
