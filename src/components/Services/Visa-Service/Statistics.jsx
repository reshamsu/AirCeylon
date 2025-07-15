import React from "react";
import { Container } from "@mui/material";
import { LuPercent } from "react-icons/lu";
import { ImStatsBars } from "react-icons/im";
import { FaGlobeEurope } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";

const Statistics = () => {
  return (
    <div className="landing-stats1">
      <Container className="container">
        <div className="container-fluid">
          <h1>
            Our Visa <span className="gradient-text">Expertise</span>
          </h1>
          {/* <h4>Hassle-Free VISA Assistance for Global Travel</h4> */}
        </div>

        <div className="container-lg">
          <div className="card">
            <div className="card-body">
              <div className="card-group">
                {/* <img src="/assets/success-rate.png" alt="digital" /> */}
                <LuPercent />
                <div className="card-text">
                  <h1>
                    <span className="gradient-text">100%</span>
                  </h1>
                  <h3>Approval Rate</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="card-group">
                {/* <img src="/assets/application.png" alt="digital" /> */}
                <ImStatsBars />
                <div className="card-text">
                  <h1>
                    <span className="gradient-text">200+</span>
                  </h1>
                  <h3>Applications</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="card-group">
                {/* <img src="/assets/countries.png" alt="digital" /> */}
                <FaGlobeEurope />
                <div className="card-text">
                  <h1>
                    <span className="gradient-text">30+</span>
                  </h1>
                  <h3>Countries</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="card-group">
                {/* <img src="/assets/regions.png" alt="digital" /> */}
                <FaMapLocationDot />
                <div className="card-text">
                  <h1>
                    <span className="gradient-text">5+</span>
                  </h1>
                  <h3>Regions</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Statistics;
