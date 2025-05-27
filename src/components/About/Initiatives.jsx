import React from "react";
import { Container } from "@mui/material";

const Initiatives = () => {
  return (
    <div className="about-initiatives">
      <Container className="container">
        <div className="container-fluid">
          <label>CSR</label>
          <h1>
            ⁠Sustainability <span className="gradient-text">Initiatives</span>
          </h1>
        </div>
        
        <div className="container-lg">
          <div className="card">
            <div className="card-group">
              <img
                src="/assets/operation.png"
                alt="digital" />
              <div className="card-title">
                <h4>Digital-First Operations</h4>
              </div>
              <div className="card-text">
                <p>We prioritize digital documentation, e-signatures, and online
                processes to reduce paper waste and carbon-heavy admin work.</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-group">
              <img
                src="/assets/handshake.png"
                alt="digital"/>
              <div className="card-title">
                <h4>Eco-Conscious Partners</h4>
              </div>
              <div className="card-text">
                <p>We collaborate with Expert Partners that are committed to
                sustainable tourism and green practices.</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-group">
              <img
                src="/assets/education.png"
                alt="digital"/>
              <div className="card-title">
                <h4>⁠Community Integration & Support</h4>
              </div>
              <div className="card-text">
                <p>We support migrant communities with long-term integration
                services that promote local engagement, sustainable living, and
                inclusive development.</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-group">
              <img
                src="/assets/office-building.png"
                alt="digital" />
              <div className="card-title">
                <h4>Green Office Culture</h4>
              </div>
              <div className="card-text">
                <p>We implement energy-efficient practices at our offices,
                including recycling programs, minimal single-use plastics, and
                remote work flexibility to reduce commuting.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Initiatives;
