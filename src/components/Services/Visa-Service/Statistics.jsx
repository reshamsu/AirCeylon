import React from "react";
import { Container } from "@mui/material";

const Statistics = () => {
  return (
    <div className="landing-stats1">
      <Container className="container">
        <div className="container-fluid">
          <h1>
            Our <span className="gradient-text">Visa Expertise</span>
          </h1>
          {/* <h4>Hassle-Free VISA Assistance for Global Travel</h4> */}
        </div>

        <div className="container-lg">
          <div className="card">
            <div className="card-body">
              <div className="card-group">
                <img src="/assets/success-rate.png" alt="digital" />
                <div className="card-text">
                  <h2>
                    <span className="gradient-text">100%</span> Approval
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="card-group">
                <img src="/assets/application.png" alt="digital" />
                <div className="card-text">
                  <h2>
                    <span className="gradient-text">200+</span> Applications
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="card-group">
                <img src="/assets/countries.png" alt="digital" />
                <div className="card-text">
                  <h2>
                    <span className="gradient-text">30+</span> Countries
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="card-group">
                <img src="/assets/regions.png" alt="digital" />
                <div className="card-text">
                  <h2>
                    <span className="gradient-text">5+</span> Regions
                  </h2>
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
