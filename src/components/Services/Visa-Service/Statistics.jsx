import React from "react";
import { Container } from "@mui/material";
import { FaHandshake } from "react-icons/fa";
import { GiDiamondTrophy } from "react-icons/gi";
import { GiStarsStack } from "react-icons/gi";
import { FaMapLocationDot } from "react-icons/fa6";

const Stats = () => {
  return (
    <div className="landing-stats">
      <Container className="container">
        <div className="container-fluid">
          <h1>
            Our <span className="gradient-text">Visa Expertise</span>
          </h1>
          <h4>Navigating Your Experience with Confidence and Ease</h4>
        </div>

        <div className="container-lg">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">
                <FaHandshake /> Over 30 Mil. VISA Applications
              </h4>
              <i className="card-text">
                Trusted global alliance for seamless travel.
              </i>
            </div>
          </div>

          <div className="card">
            <div className="image">
              <img src="" className="card-img-top" alt="" />
            </div>
            <div className="card-body">
              <h4 className="card-title">
                <GiDiamondTrophy /> Average VISA Processing Time
              </h4>
              <i className="card-text">
                Thousands of trips, flawlessly delivered.
              </i>
            </div>
          </div>

          <div className="card">
            <div className="image">
              <img src="" className="card-img-top" alt="" />
            </div>
            <div className="card-body">
              <h4 className="card-title">
                <GiStarsStack /> Top 5 MOST Applied Tourist VISAS
              </h4>
              <i className="card-text">
                Consistently high customer satisfaction.
              </i>
            </div>
          </div>

          {/* <div className="card">
            <div className="image">
              <img src="" className="card-img-top" alt="" />
            </div>
            <div className="card-body">
              <h4 className="card-title">
                <FaMapLocationDot /> VISA Rejection Rate 
              </h4>
              <i className="card-text">
                A vibrant community of avid travelers.
              </i>
            </div>
          </div> */}
        </div>
      </Container>
    </div>
  );
};

export default Stats;
