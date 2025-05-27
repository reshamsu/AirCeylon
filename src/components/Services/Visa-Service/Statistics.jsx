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
          <h4>Expertise Unmatched</h4>
        </div>

        <div className="container-lg">
          <div className="card">
            <div className="card-body">
              <div className="card-group">
                <img src="/assets/success-rate.png" alt="digital" />
                <h2>100% Success Rate</h2>
              </div>
              <div className="card-text">
                <p>Trusted global alliance for seamless travel.</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="card-group">
                <img src="/assets/application.png" alt="digital" />
                <h2>200+ Application</h2>
              </div>
              <div className="card-text">
                <p>Trusted global alliance for seamless travel.</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="card-group">
                <img src="/assets/countries.png" alt="digital" />
                <h2>30+ Countries</h2>
              </div>
              <div className="card-text">
                <p>Trusted global alliance for seamless travel.</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="card-group">
                <img src="/assets/regions.png" alt="digital" />
                <h2>5+ Regions</h2>
              </div>
              <div className="card-text">
                <p>Trusted global alliance for seamless travel.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Statistics;
