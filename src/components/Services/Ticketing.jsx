import { Container } from "@mui/material";
import React from "react";

const TicketingHero = () => {
  return (
    <div className="hero-section">
      <div className="homepage-overlay">
        <img
          src="/assets/notarization-section.jpg"
          className="homepage darkened"
        />
      </div>
      <Container className="ticketing-hero">
          <div className="container-fluid">
            <h1>Ticketing</h1>
            <p>Info Tickets</p>
          </div>
      </Container>
    </div>
  );
};

export default TicketingHero;
