import React from "react";
import { Container } from "@mui/material";
import { FaHandshake } from "react-icons/fa";
import { GiDiamondTrophy } from "react-icons/gi";
import { GiStarsStack } from "react-icons/gi";
import { FaMapLocationDot } from "react-icons/fa6";

const Statistics = () => {
  return (
    <div className="landing-stats">
      <Container className="container">
        <div className="container-fluid">
          <label>Our Expertise</label>
          <h1>Your Journey, Our Responsibility.</h1>
          <h4>Navigating Your Experience with Confidence and Ease</h4>
        </div>

        <div className="container-lg">
          <div className="card">
            <div className="card-body">
              <h4 className="card-group">
                <FaHandshake /> Expert Partnerships
              </h4>
              <i className="card-text">
                - Trusted Licensed Professionals to ensure Your Experience is in
                the Best of Hands.
              </i>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h4 className="card-group">
                <GiDiamondTrophy /> Exceeding Standards
              </h4>
              <i className="card-text">
                - Commitment to High Quality Service & Support Beyond the
                Boundaries by Flying the Extra Mile for You.
              </i>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h4 className="card-group">
                <GiStarsStack /> Effortless Experience
              </h4>
              <i className="card-text">
                - Dedicated to Implementing a Smart, Easy, Simple & Seamless
                Experience as much as Your Journey.
              </i>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h4 className="card-group">
                <FaMapLocationDot /> Exclusive Travel Hub
              </h4>
              <i className="card-text">
                - Determined to Provide Exclusive Services All in One Place.
              </i>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Statistics;
