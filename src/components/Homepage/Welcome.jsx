import React from "react";
import { Container } from "@mui/material";

const Welcome = () => {
  return (
    <div className="landing-welcome">
      <div className="homepage-overlay">
        <img
          src="./assets/Watermark.png"
          className="watermark"
          alt="Watermark"
        />
      </div>

      <Container className="container">
        <div className="container-fluid">
          <label>Welcome</label>
          {/* <img src="./assets/Logo.png" alt="Air Ceylon Logo" /> */}
          <h1>
            Welcome to <span className="gradient-text">Air Ceylon</span>
          </h1>
          {/* <h4 className="card-title">
                At Air Ceylon, your journey is our passion. - see what our
                guests have to say.
              </h4> */}
          <p style={{ fontWeight: "660", marginBottom: ".6rem" }}>Your journey begins now. </p>
          <p>
            Explore a world of seamless travel, exceptional service, and
            boundless possibilities. Let every scroll guide you to the
            destination of your dreams.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Welcome;
