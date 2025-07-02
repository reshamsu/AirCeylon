import React from "react";
import { Container } from "@mui/material";

const procedureSteps = [
  { step: "STEP 1" },
  { description: "Domestic Service & Handling", price: 50 },

  { step: "STEP 2" },
  { description: "Outbound Shipping", price: 250 },

  { step: "STEP 3" },
  { description: "Notarization", price: 75 },
  { description: "Additional Cost per Document", price: 40 },
  { description: "Apostille", price: 175 },
  { description: "Additional Cost per Document", price: 75 },
  { description: "RSN Courier", price: 100 },
  { description: "Canadian Official Document Charges", price: 25 },
  { description: "Additional Cost per Document", price: 25 },

  { step: "STEP 4" },
  { description: "Verification", price: 100 },

  { step: "STEP 5" },
  { description: "International Service & Handling Cost", price: 50 },

  { step: "STEP 6" },
  { description: "Inbound Shipping", price: 250 },
];

const Process = () => {
  return (
    <div className="landing-process">
      <Container className="container">
        <div className="container-fluid">
          <label>Affiliations</label>
          <h1>
            Canadian Issued <span className="gradient-text">Documents</span>
          </h1>
          <p>
            Here’s a quick glance at the ease and process in getting your
            Canadian Issued Documents Apostilled, Notarized, Authenticated &
            Verified.
          </p>
        </div>

        <div className="container-lg">
          <h3 className="gradient-text" style={{ marginBottom: "1rem" }}>
            Price & Procedure Breakdown
          </h3>

          <table
            border="1"
            cellPadding="10"
            style={{
              width: "100%",
              borderCollapse: "collapse",
              textAlign: "start",
            }}
          >
            <thead style={{ backgroundColor: "#e0e0e0" }}>
              <tr>
                <th>Description</th>
                <th>Price (CAD)$</th>
              </tr>
            </thead>
            <tbody>
              {procedureSteps.map((item, index) =>
                item.step ? (
                  <tr
                    key={`step-${index}`}
                    style={{ backgroundColor: "#f0f8ff", fontWeight: "bold" }}
                  >
                    <td colSpan={2}> {item.step}</td>
                  </tr>
                ) : (
                  <tr key={`desc-${index}`}>
                    <td>{item.description}</td>
                    <td>${item.price.toFixed(2)}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>

          <p style={{ marginTop: "1rem", fontStyle: "italic", color: "#555" }}>
            * Table prices are pre-tax and subject to 13% (HST) by the Province
            of Ontario, payable to service providers located in Ontario, Canada
            via Air Ceylon International Office in Canada.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Process;
