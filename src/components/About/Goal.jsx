import React from "react";
import { Container } from "@mui/material";

const Goal = () => {
  return (
    <div className="about-goal">
      <Container className="container">
        <div className="container-fluid">
          <div className="company">
            <div className="body-text1" style={{ paddingRight: "6rem" }}>
              <img
                src="./assets/VisionW.png"
                alt="vision"
                className="watermark"
              ></img>
              {/* <label>Vision</label> */}
              <h1>
                Our <span className="gradient-text">Vision</span>
              </h1>
              <p>
                "To be the international Hub of Sri Lanka as the Leader of
                Travel & Tourism."
              </p>
            </div>
            <img
              src="./assets/vision.jpg"
              alt="vision"
              className="image"
              style={{ border: "10px solid var(--text-gold-hover)" }}
            ></img>
          </div>

          <div className="company">
            <img
              src="./assets/mission.jpg"
              alt="mission"
              className="image"
              style={{
                height: "51vh",
                border: "10px solid var(--text-gold-hover)",
              }}
            />
            <div className="body-text2" style={{ paddingLeft: "6rem" }}>
              <img
                src="./assets/MissionW.png"
                alt="mission"
                className="watermark"
              ></img>
              {/* <label>Mission</label> */}
              <h1>
                Our <span className="gradient-text">Mission</span>
              </h1>
              <p>
                "To Navigate New Oppotunties smoothly with ease confidence as
                you embark onto your next chapter."
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Goal;
