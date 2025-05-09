import React from "react";
import { Container } from "@mui/material";
import { GiWorld } from "react-icons/gi";
import { BsSuitcaseFill } from "react-icons/bs";
import { GiStarsStack } from "react-icons/gi";
import { BsPersonArmsUp } from "react-icons/bs";

const Statistics = () => {
  return (
    <div className="stats">
      <Container className="container">
        <div className="container-fluid">
          <label>Our Reviews</label>
          <h1>What we offer</h1>
          <h4>Helping you get the best service from Air Ceylon</h4>
        </div>

        <div className="container-lg">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title"> <GiWorld /> 45+ Countries</h4>
              <p className="card-text">"We help travelers explore over 45+ countries across 6 continents."</p>
            </div>
          </div>

          <div className="card">
            <div className="image">
              <img src="" className="card-img-top" alt="" />
            </div>
            <div className="card-body">
              <h4 className="card-title"><BsSuitcaseFill /> 12,000+ Trips Booked</h4>
              <p className="card-text">"12,000+ successful trips organized."</p>
            </div>
          </div>

          <div className="card">
            <div className="image">
              <img src="" className="card-img-top" alt="" />
            </div>
            <div className="card-body">
              <h4 className="card-title"><GiStarsStack /> Customer Satisfaction</h4>
              <p className="card-text">
                "97% customer satisfaction rate across all bookings."
              </p>
            </div>
          </div>

                    <div className="card">
            <div className="image">
              <img src="" className="card-img-top" alt="" />
            </div>
            <div className="card-body">
              <h4 className="card-title"><BsPersonArmsUp /> Happy Travelers</h4>
              <p className="card-text">
                "Join a community of 35,000+ happy travelers worldwide."
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Statistics;
