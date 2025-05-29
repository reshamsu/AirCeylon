import React from "react";
import { Container } from "@mui/material";
import { FaCheck } from "react-icons/fa6";
import { PiTargetBold } from "react-icons/pi";
import { WiTime4 } from "react-icons/wi";
import { GrOverview } from "react-icons/gr";
import { IoCart } from "react-icons/io5";

const EPTPackages = () => {
  return (
    <div className="ept-packages">
      <Container className="container">
        <div className="container-fluid">
          <h1>
            IELTS <span className="gradient-text">Courses</span>
          </h1>
        </div>
        <div className="container-lg">
          <div className="card">
            <div className="card-title">
              <h3>Crash Course</h3>
            </div>
            <div className="card-body">
              <ul>
                <li>
                  <GrOverview style={{ fontSize: "22px" }} /> Sessions: 5
                </li>
                <li>
                  <PiTargetBold /> Focus: Academic & General
                </li>
                <li>
                  <WiTime4 /> Duration: Customizable
                </li>
              </ul>

              <h4>Modules Covered:</h4>
              <ul>
                <li>
                  <FaCheck /> Listening
                </li>
                <li>
                  <FaCheck /> Reading
                </li>
                <li>
                  <FaCheck /> Writing
                </li>
                <li>
                  <FaCheck /> Speaking
                </li>
              </ul>
              <button className="btn btn-dark">
                LKR 25,000 <IoCart /> 
              </button>
            </div>
          </div>

          <div className="card" style={{  boxShadow: "0px 2px 40px rgb(0, 0, 0, 0.6)", background: "linen" }}>
            <div className="card-title-active">
              <h3>Essential Course</h3>
            </div>
            <div className="card-body">
              <ul>
                <li>
                  <GrOverview style={{ fontSize: "22px" }} /> Sessions: 10
                </li>
                <li>
                  <PiTargetBold /> Focus: Academic & General
                </li>
                <li>
                  <WiTime4 /> Duration: Customizable
                </li>
              </ul>

              <h4>Modules Covered:</h4>
              <ul>
                <li>
                  <FaCheck /> Listening
                </li>
                <li>
                  <FaCheck /> Reading
                </li>
                <li>
                  <FaCheck /> Writing
                </li>
                <li>
                  <FaCheck /> Speaking
                </li>
              </ul>
              <button className="btn btn-primary">
                LKR 50,000 <IoCart />
              </button>
            </div>
          </div>

          <div className="card">
            <div className="card-title">
              <h3>Pro Course</h3>
            </div>
            <div className="card-body">
              <ul>
                <li>
                  <GrOverview style={{ fontSize: "22px" }} /> Sessions: 20
                </li>
                <li>
                  <PiTargetBold /> Focus: Academic & General
                </li>
                <li>
                  <WiTime4 /> Duration: Customizable
                </li>
              </ul>

              <h4>Modules Covered:</h4>
              <ul className="list">
                <li>
                  <FaCheck /> Listening
                </li>
                <li>
                  <FaCheck /> Reading
                </li>
                <li>
                  <FaCheck /> Writing
                </li>
                <li>
                  <FaCheck /> Speaking
                </li>
              </ul>
              <button className="btn btn-dark">
                LKR 100,000 <IoCart />
              </button>
            </div>
          </div>
        </div>

        {/* <div className="added-info">
            <ul>
              <li>
                <FaCheck /> Virtual 1-to-1 Classes
              </li>
              <li>
                <FaCheck /> Target Audience: Academic and General IELTS
                candidates.
              </li>
              <li>
                <FaCheck /> Customization: Courses are designed to help you
                achieve your specific score target.
              </li>
              <li>
                <FaCheck /> Support: Individual attention and one-on-one
                speaking sessions.
              </li>
              <li>
                <FaCheck /> Learning Materials: Access to online resources,
                including ebooks, videos, reading materials, sample writings,
                and practice exercises.
              </li>
              <li>
                <FaCheck /> Progress Monitoring: Periodical mock tests to gauge
                overall score and progress.
              </li>
            </ul>
            <p>
              Each course package is designed to cater to different preparation
              needs, ensuring a comprehensive and effective learning experience.
            </p>
          </div> */}
      </Container>
    </div>
  );
};

export default EPTPackages;
