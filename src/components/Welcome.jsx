import React from "react";
import { Container } from "@mui/material";

const Info = () => {
  return (
    <div className="welcome">
      <Container className="container">
        <div className="container-fluid">
          <label>Welcome</label>
          <h1>
            Why <span>Air Ceylon</span>
          </h1>
          <h4>
            At Air Ceylon, your journey is our passion. - see what our guests
            have to say.
          </h4>
        </div>

        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Title Here</h4>
            <p className="card-text">Text Here</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Info;
