import React from "react";
import { Container } from "@mui/material";

const TransitionWelcome = () => {
  return (
    <div className="ts-provision">
      <Container className="container">
        <div className="container-fluid">
          <h1>
            What we <span className="gradient-text">Offer</span>
          </h1>
        </div>
        <div className="container-lg">
          <div className="card">
            <div className="card-group">
              <img
                src="/assets/accommodation.png"
                alt="digital"
                style={{ height: "8vh" }}
              />
              <h4>Accommodation</h4>
            </div>
            <div className="card-text">
              <p>
                We enjoy going the extra mile to ensure YOUR New Chapter is
                smooth and confident. Our Regional Transition Support Advisor is
                determined to provide you the assistance you require from the
                moment you touch down onto a New World - from accommodation,
                jobs, communities and lifestyle
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-group">
              <img src="/assets/securedocs.png" alt="digital" />
              <h4>Jobs</h4>
            </div>
            <div className="card-text">
              <p>
                We enjoy going the extra mile to ensure YOUR New Chapter is
                smooth and confident. Our Regional Transition Support Advisor is
                determined to provide you the assistance you require from the
                moment you touch down onto a New World - from accommodation,
                jobs, communities and lifestyle
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-group">
              <img src="/assets/intertwined.png" alt="digital" />
              <h4>Community</h4>
            </div>
            <div className="card-text">
              <p>
                We enjoy going the extra mile to ensure YOUR New Chapter is
                smooth and confident. Our Regional Transition Support Advisor is
                determined to provide you the assistance you require from the
                moment you touch down onto a New World - from accommodation,
                jobs, communities and lifestyle
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-group">
              <img src="/assets/lifestyle.png" alt="digital" />
              <h4>Lifestyle Management</h4>
            </div>
            <div className="card-text">
              <p>
                We enjoy going the extra mile to ensure YOUR New Chapter is
                smooth and confident. Our Regional Transition Support Advisor is
                determined to provide you the assistance you require from the
                moment you touch down onto a New World - from accommodation,
                jobs, communities and lifestyle
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TransitionWelcome;
