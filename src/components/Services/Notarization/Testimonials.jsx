import React from "react";
import { Container } from "@mui/material";
import { FaCommentDots } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa6";

const Testimonials = () => {
  return (
    <div className="landing-testimonials">
      <Container className="container">
        <div className="container-fluid">
          <h1>
            Experience with <span className="gradient-text">Air Ceylon</span>{" "}
            <FaCommentDots />
          </h1>
        </div>

        <div className="container-lg">
          <div className="card">
            <label>Notarization</label>
            <div className="card-body">
              <h4 className="card-title">
                <FaQuoteLeft />
                The level of personalized service Air Ceylon provides is
                unparalleled. Their attention to detail, swift communication,
                and thoughtful recommendations made my corporate retreat both
                productive and enjoyable. Highly recommended for premium travel
                needs. <FaQuoteRight />
              </h4>
              <p className="card-text">
                Graduate - Canadian College (Sri Lanka)
              </p>
            </div>
          </div>
          <div className="card">
            <label>Notarization</label>
            <div className="card-body">
              <h4 className="card-title">
                <FaQuoteLeft />
                As a student who studied in a Canadian affiliated college in Sri
                Lanka, I received a Canadian certificate issued by a Canadian
                Academic Body (IATA) upon graduation. When I needed it
                authenticated for overseas employment, and after so much
                struggle with the Foreign Bureau I found that the High
                Commission of Canada in Sri Lanka no longer offered this service
                - according to them there was no other way! Thankfully, I was
                able to get it notarized and authenticated through Air Ceylon
                which worked perfectly for my job application. I'm grateful to
                Air Ceylon’s team for understanding the importance of my urgency
                and the quick service that helped secure my job overseas. 100%
                recommended and definitely worth it!
                <FaQuoteRight />
              </h4>
              <p className="card-text">
                Graduate - Canadian College (Sri Lanka)
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
