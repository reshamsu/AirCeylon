import React from "react";
import { Container } from "@mui/material";

const Initiatives = () => {
  return (
    <div className="about-section5">
      <Container className="container">
        <div className="container-fluid">
          <label>CSR</label>
          <h1>
            ⁠Sustainability <span className="gradient-text">Initiatives</span>
          </h1>
          <ul>
            <li>
              1. Digital-First Operations - We prioritize digital documentation,
              e-signatures, and online processes to reduce paper waste and
              carbon-heavy admin work.
            </li>
            <li>
              2. Eco-Conscious Partners - We collaborate with Expert Partners
              that are committed to sustainable tourism and green practices.
            </li>
            <li>
              3. ⁠Community Integration & Support - We support migrant
              communities with long-term integration services that promote local
              engagement, sustainable living, and inclusive development.
            </li>
            <li>
              4. Green Office Culture - We implement energy-efficient practices
              at our offices, including recycling programs, minimal single-use
              plastics, and remote work flexibility to reduce commuting.
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Initiatives;
