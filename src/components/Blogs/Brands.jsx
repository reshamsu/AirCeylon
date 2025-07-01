import React from "react";
import { Container } from "@mui/material";

const brandLogos = [
  { name: "MyHive", image: "/assets/logos/myhive.png" },
  { name: "Google", image: "/assets/logos/google.png" },
  { name: "DHL", image: "/assets/logos/dhl.png" },
  { name: "WSpace", image: "/assets/logos/wspace.png" },
  { name: "IELTS by Tasha", image: "/assets/logos/ielts.png" },
  { name: "Red Seal Notary", image: "/assets/logos/redseal.png" },
];

const Brands = () => {
  return (
    <div className="landing-stats">
      <Container className="container">
        <div className="container-fluid">
          <label>Branding</label>
          <h1>
            Partnering <span className="gradient-text">Brands</span>
          </h1>

          <div className="brand-logos-grid" style={gridStyle}>
            {brandLogos.map((brand, index) => (
              <div key={index} style={cardStyle}>
                <img
                  src={brand.image}
                  alt={brand.name}
                  title={brand.name}
                  style={imgStyle}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

// Inline styling (you can move this to your CSS if preferred)
const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
  gap: "24px",
  justifyItems: "center",
  alignItems: "center",
  marginTop: "2rem",
};

const cardStyle = {
  padding: "12px",
  borderRadius: "12px",
  backgroundColor: "#f5f5f5",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100px",
};

const imgStyle = {
  maxWidth: "100px",
  maxHeight: "60px",
  objectFit: "contain",
};

export default Brands;
