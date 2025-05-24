import { Container } from "@mui/material";
import React from "react";

const Blog = () => {
  return (
    <div className="hero-section">
      <div className="homepage-overlay">
        <img src="/assets/blogs.jpg" className="homepage darkened" />
      </div>
      <Container className="landing-hero">
        <div className="container-fluid">
          <h1>Blogs</h1>
          <p>
            Why More Sri Lankans Trust <span>Air Ceylon</span> for Hassle-Free
            Travel Planning
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Blog;
