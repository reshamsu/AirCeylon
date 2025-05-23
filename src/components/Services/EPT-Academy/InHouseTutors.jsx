import React from "react";
import { Container } from "@mui/material";

const EPTTutors = () => {
  return (
    <div className="ept-tutoring">
      <Container className="container">
        <div className="container-fluid">
          <label>Tutors</label>
          {/* <img src="./assets/Logo.png" alt="Air Ceylon Logo" /> */}
          <h1>
            In-House <span className="gradient-text">Tutors</span>
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
            Cras aliquam purus urna.every scroll guide you to the destination of
            your dreams.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default EPTTutors;
