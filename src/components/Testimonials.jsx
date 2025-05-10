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
          <label>Testimonials</label>

          <h1>
            What Our <span>Travelers Say</span>{" "}
            <FaCommentDots
              style={{
                marginLeft: "6px",
                fontSize: "3rem",
                color: "var(--text-gold-hover)",
              }}
            />
          </h1>
          <h4>
            At Air Ceylon, your journey is our passion. - see what our guests
            have to say.
          </h4>
        </div>

        <div className="container-lg">
          <div className="card">
            <div className="image" style={{ textAlign: "center" }}>
              <img
                src="./assets/profile2.webp"
                alt=""
                style={{
                  width: "30%",
                  background: "#fff",
                  borderRadius: "100%",
                }}
              ></img>
            </div>
            <div className="card-body">
              <p className="card-title">
                <FaQuoteLeft />Air Ceylon delivered a seamless, first-class travel
                experience. From the moment I booked, every detail—from flight
                coordination to luxury accommodation—was handled with precision
                and care. Their professionalism and regional expertise made all
                the difference. <FaQuoteRight />
              </p>
              <h4 className="card-text">- Isabelle Laurent, International Travel Consultant, France</h4>
            </div>
          </div>

          <div className="card">
            <div className="image" style={{ textAlign: "center" }}>
              <img
                src="./assets/profile1.png"
                alt=""
                style={{
                  width: "30%",
                  background: "#fff",
                  borderRadius: "100%",
                }}
              ></img>
            </div>
            <div className="card-body">
              <p className="card-title">
                <FaQuoteLeft />As a frequent traveler, I value efficiency, reliability, and
                local insight. Air Ceylon not only helped me navigate multiple
                destinations across Asia and Europe, but also offered curated
                itineraries that exceeded expectations. A truly trusted travel
                partner.<FaQuoteRight />
              </p>
              <h4 className="card-text">- John Ian, Business Strategist, Turkey</h4>
            </div>
          </div>

          <div className="card">
            <div className="image" style={{ textAlign: "center" }}>
              <img
                src="./assets/profile3.jpg"
                alt=""
                style={{
                  width: "30%",
                  background: "#fff",
                  borderRadius: "100%",
                }}
              ></img>
            </div>
            <div className="card-body">
              <p className="card-title">
                <FaQuoteLeft />
                The level of personalized service Air Ceylon provides is
                unparalleled. Their attention to detail, swift communication,
                and thoughtful recommendations made my corporate retreat both
                productive and enjoyable. Highly recommended for premium travel
                needs. <FaQuoteRight />
              </p>
              <h4 className="card-text">
                — Lewis Adams, Executive Director, Global Ventures Inc.
              </h4>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
