import React from "react";
import { Container } from "@mui/material";
import { FaHandshake } from "react-icons/fa";
import { GiDiamondTrophy } from "react-icons/gi";
import { GiStarsStack } from "react-icons/gi";
import { FaMapLocationDot } from "react-icons/fa6";

const Stats = () => {
  return (
    <div className="visa-stats">
      <Container className="container">
        <div className="container-fluid">
          <label>Our Expertise</label>
          <h1>Our Visa <span>Expertise</span></h1>
          <h4>Navigating Your Experience with Confidence and Ease</h4>
        </div>

        <div className="container-lg">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">
                {" "}
                <FaHandshake /> Expert Partnerships
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
                <GiDiamondTrophy /> Exceeding Standards
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
                <GiStarsStack /> Effortless Experience
              </h4>
              <i className="card-text">
                Consistently high customer satisfaction.
              </i>
            </div>
          </div>

          <div className="card">
            <div className="image">
              <img src="" className="card-img-top" alt="" />
            </div>
            <div className="card-body">
              <h4 className="card-title">
                <FaMapLocationDot /> Exclusive Travel Hub
              </h4>
              <i className="card-text">
                A vibrant community of avid travelers.
              </i>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Stats;
