import React from "react";
import { Container } from "@mui/material";

const TransitionWelcome = () => {
  return (
    <div className="landing-stats">
      <Container className="container">
        <div className="container-fluid">
          <h1>What We <span className="gradient-text-blue">Offer</span></h1>
        </div>

        <div className="container-lg">
          <div className="card">
            <div className="card-body" style={{ height: "24vh" }}>
              <div className="card-group">
                <img src="/assets/accom.png" alt="digital" />
                <h2>Accommodation</h2>
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
            <div className="card-body" style={{ height: "24vh" }}>
              <div className="card-group">
                <img src="/assets/jobs.png" alt="digital" />
                <h2>Jobs</h2>
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
            <div className="card-body" style={{ height: "24vh" }}>
              <div className="card-group">
                <img src="/assets/community.png" alt="digital" />
                <h2>Community</h2>
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
            <div className="card-body" style={{ height: "24vh" }}>
              <div className="card-group">
                <img src="/assets/lifestyle.png" alt="digital" />
                <h2>Lifestyle Management</h2>
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

export default TransitionWelcome;
