import React from "react";
import { Container } from "@mui/material";

const TransitionWelcome = () => {
  return (
    <div className="ept-monologue">
      <Container className="container">
        <div className="container-lg">
          <div className="card">
            <div className="card-content">
              <img src="/assets/accomadation.png" alt="digital" style={{ width: "6%" }}/>
              <h2>Accomadation</h2>
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
            <div className="card-content">
              <img src="/assets/securedocs.png" alt="digital" style={{ width: "6%" }}/>
              <h2>Jobs</h2>
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
            <div className="card-content">
              <img src="/assets/intertwined.png" alt="digital" style={{ width: "6%" }}/>
              <h2>Community</h2>
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
            <div className="card-content">
              <img src="/assets/lifestyle.png" alt="digital" style={{ width: "6%" }}/>
              <h2>Lifestyle Management</h2>
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
