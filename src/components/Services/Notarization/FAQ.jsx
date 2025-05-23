import React from "react";
import { Container } from "@mui/material";

const FAQ = () => {
  return (
    <div className="ept-faq">
      <Container className="container">
        <div className="container-fluid">
          <label>FAQ</label>
          <h1>
            Frequently Asked<span className="gradient-text">Questions</span>
          </h1>
          <p>What is Authentication?</p>
          <p>What is Notarization?</p>
          <p>What is Verification?</p>
          <p>What is Attestation?</p>
        </div>
      </Container>
    </div>
  );
};

export default FAQ;
