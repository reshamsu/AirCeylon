import React from "react";
import { Container } from "@mui/material";
import { FaScaleUnbalanced } from "react-icons/fa6";
import { PiLightbulbFilamentBold } from "react-icons/pi";
import { FaHandsHolding } from "react-icons/fa6";
import { LuHeartHandshake } from "react-icons/lu";

const CoreValues = () => {
  return (
    <div className="landing-stats">
      <Container className="container">
        <div className="container-fluid">
          <label>Values</label>
          <h1>
            Our <span className="gradient-text">Core Values</span>
          </h1>
        </div>

        <div className="container-lg">
          <div className="card">
            <div className="card-body">
              <div className="card-group">
                <FaScaleUnbalanced />
                <h3>Integrity</h3>
              </div>
              <div className="card-text">
                <p>
                  We act with honesty, accountability, and ethical
                  responsibility in every service we deliver.
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <div className="card-group">
                <PiLightbulbFilamentBold />
                <h3>⁠Innovation</h3>
              </div>
              <div className="card-text">
                <p>
                  We embrace modern solutions, smart systems, and continuous
                  improvement to make every journey seamless.
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <div className="card-group">
                <FaHandsHolding />
                <h3>⁠Initiative</h3>
              </div>
              <div className="card-text">
                <p>
                  We proactively solve challenges, anticipate needs, and go
                  beyond expectations — before, during, and after travel.
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <div className="card-group">
                <LuHeartHandshake />
                <h3>Inspiration</h3>
              </div>
              <div className="card-text">
                <p>
                  We aim to inspire confidence, ambition, and new beginnings to
                  everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CoreValues;
