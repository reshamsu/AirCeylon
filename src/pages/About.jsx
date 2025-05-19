import { Container } from "@mui/material";
import React from "react";
import Timeline from "../components/Timeline";

const About = () => {
  return (
    <>
      <div className="about-section1">
        <Container className="container">
          <div className="container-fluid">
            <label>About</label>
            <h1>
              About <span className="gradient-text">Us</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              rutrum vel tortor at tempor. Quisque tincidunt leo suscipit tellus
              lacinia placerat. Quisque eleifend turpis turpis, quis suscipit
              nisl fringilla id. In accumsan quam nec nisi faucibus, sed feugiat
              odio pulvinar. Nam est nisi, auctor ac hendrerit iaculis, feugiat
              nec justo. Vestibulum gravida, leo eu sollicitudin fringilla, nibh
              turpis maximus orci, porttitor sollicitudin magna nisl id metus.
              Mauris vitae nulla in tellus dignissim dapibus ornare quis enim.
              Cras aliquam purus urna.
            </p>
          </div>
        </Container>
      </div>
      <div className="about-section2">
        <Container className="container">
          <div className="container-fluid">
            <label>Our Goal</label>
            <h1>
              Mission & <span className="gradient-text">Vision </span>
            </h1>
            <div className="vision" style={{ display: "flex", justifyContent: "space-around"}}>
              <div className="body-text" style={{ display: "flex", flexDirection: "column", justifyContent: "center"}}>
                <h2 className="gradient-text">Our Vision</h2>
                <p>
                  "To be the international Hub of Sri Lanka as the Leader of
                  Travel & Tourism."
                </p>
              </div>
              <img src="./assets/vision.jpg" alt="vision" style={{ width: "30%", borderRadius: "100%"}}></img>
            </div>
            <div className="mission">
              <h4 className="gradient-text">Our Mission</h4>
              <p>
                To Navigate New Oppotunties smoothly with ease confidence as you
                embark onto your next chapter."
              </p>
            </div>
          </div>
        </Container>
      </div>
      <div className="about-section3">
        <Container className="container">
          <div className="container-fluid">
            <label>Experience</label>
            <h1>
              Our <span className="gradient-text">Journey</span>
            </h1>
            <Timeline />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              rutrum vel tortor at tempor. Quisque tincidunt leo suscipit tellus
              lacinia placerat. Quisque eleifend turpis turpis, quis suscipit
              nisl fringilla id. In accumsan quam nec nisi faucibus, sed feugiat
              odio pulvinar. Nam est nisi, auctor ac hendrerit iaculis, feugiat
              nec justo. Vestibulum gravida, leo eu sollicitudin fringilla, nibh
              turpis maximus orci, porttitor sollicitudin magna nisl id metus.
              Mauris vitae nulla in tellus dignissim dapibus ornare quis enim.
              Cras aliquam purus urna.
            </p>
          </div>
        </Container>
      </div>
      <div className="about-section4">
        <Container className="container">
          <div className="container-fluid">
            <label>Core Values</label>
            <h1>
              Our <span className="gradient-text">Core Values</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              rutrum vel tortor at tempor. Quisque tincidunt leo suscipit tellus
              lacinia placerat. Quisque eleifend turpis turpis, quis suscipit
              nisl fringilla id. In accumsan quam nec nisi faucibus, sed feugiat
              odio pulvinar. Nam est nisi, auctor ac hendrerit iaculis, feugiat
              nec justo. Vestibulum gravida, leo eu sollicitudin fringilla, nibh
              turpis maximus orci, porttitor sollicitudin magna nisl id metus.
              Mauris vitae nulla in tellus dignissim dapibus ornare quis enim.
              Cras aliquam purus urna.
            </p>
          </div>
        </Container>
      </div>
      <div className="about-section5">
        <Container className="container">
          <div className="container-fluid">
            <label>ECO</label>
            <h1>
              ⁠Sustainability <span className="gradient-text">Initiatives</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              rutrum vel tortor at tempor. Quisque tincidunt leo suscipit tellus
              lacinia placerat. Quisque eleifend turpis turpis, quis suscipit
              nisl fringilla id. In accumsan quam nec nisi faucibus, sed feugiat
              odio pulvinar. Nam est nisi, auctor ac hendrerit iaculis, feugiat
              nec justo. Vestibulum gravida, leo eu sollicitudin fringilla, nibh
              turpis maximus orci, porttitor sollicitudin magna nisl id metus.
              Mauris vitae nulla in tellus dignissim dapibus ornare quis enim.
              Cras aliquam purus urna.
            </p>
          </div>
        </Container>
      </div>
      <div className="about-section6">
        <Container className="container">
          <div className="container-fluid">
            <label>Message</label>
            <h1>
              Message <span className="gradient-text">Info</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              rutrum vel tortor at tempor. Quisque tincidunt leo suscipit tellus
              lacinia placerat. Quisque eleifend turpis turpis, quis suscipit
              nisl fringilla id. In accumsan quam nec nisi faucibus, sed feugiat
              odio pulvinar. Nam est nisi, auctor ac hendrerit iaculis, feugiat
              nec justo. Vestibulum gravida, leo eu sollicitudin fringilla, nibh
              turpis maximus orci, porttitor sollicitudin magna nisl id metus.
              Mauris vitae nulla in tellus dignissim dapibus ornare quis enim.
              Cras aliquam purus urna.
            </p>
            <strong>Message from the Founder.</strong>
          </div>
        </Container>
      </div>
    </>
  );
};

export default About;
