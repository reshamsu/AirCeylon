import React from "react";
import { Container } from "@mui/material";

const Info = () => {
  return (
    <div className="welcome">
      <Container className="container">
        <div className="container-fluid">
          <label>Welcome</label>
          {/* <img src="./assets/Logo.png" alt="Air Ceylon Logo" /> */}
          <h1>
            Welcome to <span>Air Ceylon</span>
          </h1>
          {/* <h4 className="card-title">
                At Air Ceylon, your journey is our passion. - see what our
                guests have to say.
              </h4> */}
          <h4>
            Your journey begins now. Explore a world of seamless travel,
            exceptional service, and boundless possibilities. Let every scroll
            guide you to the destination of your dreams.
          </h4>
        </div>
      </Container>
    </div>
  );
};

export default Info;
