import React from "react";
import { Container } from "@mui/material";

const CoreValues = () => {
  return (
    <div className="about-section4">
      <Container className="container">
        <div className="container-fluid">
          <h1>
            Our <span className="gradient-text">Core Values</span>
          </h1>
          <ul>
            <li>
              Integrity - We act with honesty, accountability, and ethical
              responsibility in every service we deliver.
            </li>
            <li>
              ⁠Innovation - We embrace modern solutions, smart systems, and
              continuous improvement to make every journey seamless.
            </li>
            <li>
              ⁠Initiative - We proactively solve challenges, anticipate needs,
              and go beyond expectations — before, during, and after travel.
            </li>
            <li>
              Inspiration - We aim to inspire confidence, ambition, and new
              beginnings to everyone.
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default CoreValues;
