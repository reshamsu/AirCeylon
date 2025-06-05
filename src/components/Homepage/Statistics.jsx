import React from "react";
import { Container } from "@mui/material";

const Statistics = () => {
  return (
    <div className="landing-stats">
      <Container className="container">
        <div className="container-fluid">
          <label>Our Expertise</label>
          <h1>Your Journey, Our Responsibility.</h1>
          <h4>Navigating Your Experience with Confidence and Ease</h4>
        </div>

        <div className="container-lg">
          <div className="card">
            <div className="card-body">
              <div className="card-group">
                <img src="/assets/partnerships.png" alt="digital" />
                <h2>Expert Partnerships</h2>
              </div>
              <div className="card-text">
                <p>
                  Trusted Licensed Professionals to ensure Your Experience is in
                  the Best of Hands.
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <div className="card-group">
                <img src="/assets/standards.png" alt="digital" />
                <h2>Exceeding Standards</h2>
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
                <img src="/assets/experience.png" alt="digital" />
                <h2>Effortless Experience</h2>
              </div>
              <p className="card-text">
                <p>
                  Dedicated to Implementing a Smart, Easy, Simple & Seamless
                  Experience as much as Your Journey.
                </p>
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <div className="card-group">
                <img src="/assets/travel-hub.png" alt="digital" />
                <h2>Exclusive Travel Hub</h2>
              </div>
              <div className="card-text">
                <p>
                  Determined to Provide Exclusive Services All in One Place.
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
