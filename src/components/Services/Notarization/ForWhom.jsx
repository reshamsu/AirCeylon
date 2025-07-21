import React from "react";
import { Container } from "@mui/material";

import leafIcon from "../../../assets/leaf.png";
import studentNotary from "../../../assets/student-notary.webp";
import notarySeal from "../../../assets/notary-seal.jpeg";
import canadaNotaries from "../../../assets/canada-notaries.jpg";

const cardData = [
  {
    img: studentNotary,
    title: "Students with Canadian Affiliated Certificates and Documents",
  },
  {
    img: notarySeal,
    title: "Canadian Affiliated Academic Institutions in Sri Lanka",
  },
  {
    img: canadaNotaries,
    title: "Canadian Academic Bodies in Sri Lanka",
  },
];

const VisaWelcome = () => {
  return (
    <div className="landing-stats" style={{ padding: "3rem 0", background: "#f9f9f9" }}>
      <Container maxWidth="lg">
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h1 style={{ marginBottom: "1rem" }}>
            Who is <span className="gradient-text">it for?</span>
          </h1>
        </div>

        <div
          className="card-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
            margin: "1rem"
          }}
        >
          {cardData.map((item, index) => (
            <div
              key={index}
              className="card-info"
              style={{
                position: "relative",
                height: "260px",
                borderRadius: "16px",
                overflow: "hidden",
                backgroundImage: `url(${item.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
              }}
            >
              {/* Dark overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundColor: "rgba(0,0,0,0.55)",
                }}
              />

              {/* Leaf icon */}
              <div
                style={{
                  position: "absolute",
                  top: "1rem",
                  left: "1rem",
                  zIndex: 2,
                }}
              >
                <img src={leafIcon} alt="Leaf Icon" style={{ width: "40px" }} />
              </div>

              {/* Card content */}
              <div
                className="card-body"
                style={{
                  position: "absolute",
                  bottom: "1.5rem",
                  left: "1.5rem",
                  right: "1.5rem",
                  color: "#fff",
                  zIndex: 2,
                }}
              >
                <h3 style={{ fontSize: "1.2rem", lineHeight: 1.5 }}>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default VisaWelcome;
