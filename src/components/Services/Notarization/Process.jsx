import React from "react";
import { Container } from "@mui/material";

const costBreakdown = [
  {
    description: "Outbound Shipping (To Canada)",
    cost: 200,
    margin: 50,
    price: 250,
    profit: 50,
  },
  {
    description: "Notarization",
    cost: 50,
    margin: 25,
    price: 75,
    profit: 25,
  },
  {
    description: "- Additional Cost per document",
    cost: 15,
    margin: 25,
    price: 40,
    profit: 25,
  },
  {
    description: "Apostille",
    cost: 150,
    margin: 25,
    price: 175,
    profit: 25,
  },
  {
    description: "- Additional Cost per document",
    cost: 50,
    margin: 25,
    price: 75,
    profit: 25,
  },
  {
    description: "RSN Courier",
    cost: 65,
    margin: 35,
    price: 100,
    profit: 35,
  },
  {
    description: "Official Document Charges",
    cost: 15,
    margin: 10,
    price: 25,
    profit: 10,
  },
  {
    description: "- Additional Cost per document",
    cost: 15,
    margin: 10,
    price: 25,
    profit: 10,
  },
  {
    description: "Verification",
    cost: 65,
    margin: 35,
    price: 100,
    profit: 35,
  },
  {
    description: "Inbound Shipping (To Sri Lanka)",
    cost: 200,
    margin: 50,
    price: 250,
    profit: 50,
  },
  {
    description: "Taxes (HST 13%) - Assuming 1 document",
    cost: 34.45,
    margin: 0,
    price: 34.45,
    profit: 0,
  },
  {
    description: "Taxes (HST 13%) - Assuming 2 documents",
    cost: 42.9,
    margin: 0,
    price: 42.9,
    profit: 0,
  },
  {
    description: "Service & Handling Cost",
    cost: 100,
    margin: 0,
    price: 100,
    profit: 0,
  },
];

const totals = [
  {
    label: "Total (Assuming 1 document)",
    cost: 879.45,
    margin: 230,
    price: 1109.45,
    profit: 230,
  },
  {
    label: "Total (Assuming 2 documents)",
    cost: 967.9,
    margin: 290,
    price: 1257.9,
    profit: 290,
  },
];

const Process = () => {
  return (
    <div className="landing-process">
      <Container className="container">
        <div className="container-fluid">
          <label>Documentation</label>
          <h1>
            Canadian Issued <span className="gradient-text">Documents</span>
          </h1>
          <p>
            Here’s a quick glance at the ease and process in getting your
            Canadian Issued Documents Apostilled, notarized, authenticated &
            verified.
          </p>
          <h3 style={{ marginBottom: "1rem" }}>- Break down of Steps & Cost -</h3>

          {/* <table border="1" cellPadding="10" style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead style={{ backgroundColor: "#e0e0e0" }}>
              <tr>
                <th>Description of Cost</th>
                <th>Cost ($)</th>
                <th>Margin ($)</th>
                <th>Price (Client) ($)</th>
                <th>Profit ($)</th>
              </tr>
            </thead>
            <tbody>
              {costBreakdown.map((item, index) => (
                <tr key={index}>
                  <td>{item.description}</td>
                  <td>${item.cost.toFixed(2)}</td>
                  <td>${item.margin.toFixed(2)}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>${item.profit.toFixed(2)}</td>
                </tr>
              ))}
              {totals.map((total, index) => (
                <tr key={`total-${index}`} style={{ backgroundColor: "#f2fff2", fontWeight: "bold" }}>
                  <td>{total.label}</td>
                  <td>${total.cost.toFixed(2)}</td>
                  <td>${total.margin.toFixed(2)}</td>
                  <td>${total.price.toFixed(2)}</td>
                  <td>${total.profit.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table> */}
        </div>
      </Container>
    </div>
  );
};

export default Process;
