import React from "react";
import { Container } from "@mui/material";

const Info = () => {
  return (
    <div className="welcome">
      <Container className="container">
        <div className="card">
          <div className="container-fluid">
            <div className="introduction">
              <label>Welcome</label>
              <img src="./assets/Logo.png" alt="Air Ceylon Logo" />
            </div>

            <div className="card-body">
              <h1>
                Why <span>Air Ceylon</span>
              </h1>
              <h4 className="card-title">
                At Air Ceylon, your journey is our passion. - see what our
                guests have to say.
              </h4>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                aliquet quam libero, ac vestibulum purus volutpat at.
                Pellentesque ac condimentum eros, at luctus ante. Mauris
                dignissim sollicitudin euismod. In lectus sem, auctor et lacus
                vel, luctus pellentesque dui. Quisque ante sapien, suscipit eget
                euismod ac, semper sed turpis. Praesent faucibus nulla quis diam
                sodales, a ullamcorper elit molestie. Pellentesque eu iaculis
                nunc. Etiam odio ligula, interdum sed fermentum vel, malesuada
                eget ex. Integer porttitor non arcu vel pharetra. Aliquam
                pellentesque.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Info;
