import React from "react";
import { Container } from "@mui/material";

const Statistics = () => {
  return (
    <div className="landing-stats">
      <Container className="container">
        <div className="container-fluid">
          <h1>
            Our <span className="gradient-text">Visa Expertise</span>
          </h1>
          <h4>Hassle-Free VISA Assistance for Global Travel</h4>
        </div>

        <div className="container-lg">
          <div className="card">
            <div className="card-body">
              <div className="card-group">
                <img src="/assets/success-rate.png" alt="digital" />
                <h3>100% Approval Success</h3>
              </div>
              <div className="card-text">
                <p>
                  Commitment to High Quality Service & Support Beyond the
                  Boundaries by Flying the Extra Mile for You.
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="card-group">
                <img src="/assets/application.png" alt="digital" />
                <h3>200+ Application Processed</h3>
              </div>
              <div className="card-text">
                <p>
                  Commitment to High Quality Service & Support Beyond the
                  Boundaries by Flying the Extra Mile for You.
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="card-group">
                <img src="/assets/countries.png" alt="digital" />
                <h3>Service in 30+ Countries</h3>
              </div>
              <div className="card-text">
                <p>
                  Commitment to High Quality Service & Support Beyond the
                  Boundaries by Flying the Extra Mile for You.
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="card-group">
                <img src="/assets/regions.png" alt="digital" />
                <h3>Covering 5+ Major Regions</h3>
              </div>
              <div className="card-text">
                <p>
                  Commitment to High Quality Service & Support Beyond the
                  Boundaries by Flying the Extra Mile for You.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Statistics;
