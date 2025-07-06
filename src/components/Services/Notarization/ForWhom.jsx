import React from "react";
import { Container } from "@mui/material";

const VisaWelcome = () => {
  return (
    <div className="landing-stats">
      <div className="container">
        <div className="container-fluid">
          <h1>
            Who is <span className="gradient-text">it for?</span>
          </h1>
          <h4>The key to notarize your documents starts here.</h4>
        </div>
        <Container className="container-lg">
          <div className="card">
            <div className="card-label">
              <img src="/assets/leaf.png" alt="" />
            </div>
            <div className="card-body">
              <img
                src="/assets/student-notary.webp"
                alt="Affiliation"
                style={{ width: "90%" }}
              />
              <h3>
                Students with Canadian Affiliated Certificates and Documents
              </h3>
            </div>
          </div>
          <div className="card">
            <div className="card-label">
              <img src="/assets/leaf.png" alt="" />
            </div>
            <div className="card-body">
              <img
                src="/assets/notary-seal.jpeg"
                alt="Affiliation"
                style={{ width: "90%", objectFit: "cover" }}
              />
              <h3>Canadian Affiliated Academic Institution's in Sri Lanka</h3>
            </div>
          </div>
          <div className="card">
            <div className="card-label">
              <img src="/assets/leaf.png" alt="" />
            </div>
            <div className="card-body">
              <img
                src="/assets/canada-notaries.jpg"
                alt="Affiliation"
                style={{ width: "90%" }}
              />
              <h3>Canadian Academic Bodies in Sri Lanka</h3>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default VisaWelcome;
