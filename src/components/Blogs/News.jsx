import React from "react";
import { Container } from "@mui/material";
const News = () => {
  return (
    <div className="landing-process">
      <Container className="container">
        <div className="container-fluid">
          <label>News</label>
          <h1>
            Our <span className="gradient-text">News</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum
            vel tortor at tempor. Quisque tincidunt leo suscipit tellus lacinia
            placerat. Quisque eleifend turpis turpis, quis suscipit nisl
            fringilla id. In accumsan quam nec nisi faucibus, sed feugiat odio
            pulvinar. Nam est nisi, auctor ac hendrerit iaculis, feugiat nec
            justo. Vestibulum gravida, leo eu sollicitudin fringilla, nibh
            turpis maximus orci, porttitor sollicitudin magna nisl id metus.
            Mauris vitae nulla in tellus dignissim dapibus ornare quis enim.
            Cras aliquam purus urna.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default News;
