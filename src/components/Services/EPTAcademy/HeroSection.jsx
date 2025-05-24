import { Container } from "@mui/material";
import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { PiTargetBold } from "react-icons/pi";
import { WiTime4 } from "react-icons/wi";
import { GrOverview } from "react-icons/gr";
import { IoCart } from "react-icons/io5";

const EPTHero = () => {
  return (
    <>
      <div className="hero-section">
        <div className="homepage-overlay">
          <img src="/assets/ielts2.jpg" className="homepage darkened" />
        </div>

        <Container className="ept-hero">
          <div className="container-fluid">
            <h1>EPT Academy</h1>
            <p>
              English Proficiency Training <span>(EPT)</span>
            </p>
          </div>
        </Container>
      </div>
    </>
  );
};

export default EPTHero;
