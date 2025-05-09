import React from 'react'
import { Container } from "@mui/material";

const HeroSection = () => {
  return (
    <Container className="airceylon">
      <div className="hero-section">
        <div className="container-fluid">
          <h1>Discover the World</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
            varius ipsum. Aenean ex.
          </p>
        </div>
        {/* <div className="button">
          <a href="/about" className="btn btn-light">
            About Us
          </a>
        </div> */}
      </div>
  </Container>
  )
}

export default HeroSection;