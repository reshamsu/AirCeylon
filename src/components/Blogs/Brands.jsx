import React from "react";
import { Container } from "@mui/material";

const brandLogos = [
  { image: "/assets/myhive.png" },
  { image: "/assets/google.webp" },
  { image: "/assets/dhl.jpg" },
  { image: "/assets/wspace.png" },
  { image: "/assets/ielts.jpg" },
  { image: "/assets/redsealnotary.webp" },
];

const Brands = () => {
  return (
    <div className="landing-brands">
      <Container className="container">
        <div className="container-fluid">
          <label>Brand Partners</label>
          <h1>
            Brands we <span className="gradient-text">work with</span>
          </h1>
          <h4>Lorum Ipsum Text Here</h4>
        </div>
        <div className="container-lg">
          {brandLogos.map((brand, index) => (
            <div className="card" key={index}>
              <img src={brand.image} alt={brand.name} title={brand.name} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

// Inline styling (you can move this to your CSS if preferred)
// const gridStyle = {
//   display: "grid",
//   gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
//   gap: "24px",
//   justifyItems: "center",
//   alignItems: "center",
//   marginTop: "2rem",
// };

// const cardStyle = {
//   padding: "12px",
//   borderRadius: "12px",
//   backgroundColor: "#f5f5f5",
//   boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   height: "100px",
// };

// const imgStyle = {
//   maxWidth: "100px",
//   maxHeight: "60px",
//   objectFit: "contain",
// };

export default Brands;
