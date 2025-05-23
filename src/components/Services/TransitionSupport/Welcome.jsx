import React from "react";
import { Container } from "@mui/material";

const Welcome = () => {
  return (
    <div className="ept-welcome">
      <Container className="container">
        <div className="container-fluid">
          <label>Welcome</label>
          <h1>
            Welcome to Air Ceylon's <span className="gradient-text">Transition Support</span>
          </h1>
          <p style={{ fontWeight: "660", marginBottom: ".6rem" }}>Info Transition Support. </p>
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
