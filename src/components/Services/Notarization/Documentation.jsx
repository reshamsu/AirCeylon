import React from "react";
import { Container } from "@mui/material";

const Process = () => {
  return (
    <div className="landing-process">
      <Container className="container">
        <div className="container-fluid">
          <label>Affiliations</label>
          <h1>
            Canadian Issued{" "}
            <span className="gradient-text">Documents ONLY</span>
          </h1>
          <p>
            - Here’s a quick glance at the ease and process in getting your
            Canadian Issued Documents Apostilled, Notarized, Authenticated &
            Verified.
          </p>
        </div>

        <div className="container" style={{ display: "flex", flexDirection: "column", gap: "1.4rem", padding: "0 2rem" }}>
          <h3 style={{ marginBottom: ".6rem", color: "#444" }}>
            A Simple and Smooth Process:
          </h3>
          <p>
            <strong>Step 1:</strong> Gathering the original
            documents/certificates with one copy each and passport copy
            printouts.
          </p>
          <p>
            <strong>Step 2:</strong> Shipping to Air Ceylon International Office
            in Toronto - Canada
          </p>
          <p>
            <strong>Step 3:</strong> Obtaining the Apostille & Notarization of
            the documents/certificates.
          </p>
          <p>
            <strong>Step 4:</strong> Verification of Notarization & Apostille
            from the General Consulate of Sri Lanka in Toronto - Canada.
          </p>
          <p>
            <strong>Step 5:</strong> Confirming all documents and notarial
            services with clients before shipping back.
          </p>
          <p>
            <strong>Step 6:</strong> Ship to Air Ceylon Office in Colombo - Sri
            Lanka.
          </p>
          <a
          href="/services/notarization"
          className="btn btn-primary"
          style={{ width: "fit-content", display: "flex", margin: "1rem 0" }}
        >
          View Pricing
        </a>
        </div>
        
      </Container>
    </div>
  );
};

export default Process;
