import React from "react";
import { Container } from "@mui/material";

const EPTMonologue = () => {
  return (
    <div className="ept-monologue">
      <Container className="container">
        <div className="container-fluid">
          <div className="row">
            <img src="/assets/tutor.png" alt="Tutor" />
            <div className="col">
              <h1>
                <span className="gradient-text">Tasha Vanhoff</span>
              </h1>
              <label>
                - Certified IELTS Tutor <span>(Brand Partner)</span>
              </label>
            </div>
          </div>

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

export default EPTMonologue;
