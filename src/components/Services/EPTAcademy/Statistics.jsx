import React from "react";
import { Container } from "@mui/material";
import { FaUserGraduate, FaChalkboardTeacher } from "react-icons/fa";
import { GiAchievement, GiProgression } from "react-icons/gi";

const Statistics = () => {
  return (
    <div className="landing-stats2">
      <Container className="container">
        <div className="container-fluid">
          <label>Our Achievements</label>
          <h1>Empowering Minds, Shaping Futures</h1>
          <h4>Discover what makes EPT Academy a trusted name in education</h4>
        </div>

        <div className="container-lg">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">
                <FaUserGraduate /> 5,000+ Graduates
              </h4>
              <i className="card-text">
                Students trained and certified across multiple professional programs.
              </i>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h4 className="card-title">
                <GiProgression /> 98% Pass Rate
              </h4>
              <i className="card-text">
                Consistently high academic success across all courses.
              </i>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h4 className="card-title">
                <FaChalkboardTeacher /> 150+ Expert Instructors
              </h4>
              <i className="card-text">
                Qualified professionals providing personalized learning support.
              </i>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h4 className="card-title">
                <GiAchievement /> Globally Recognized
              </h4>
              <i className="card-text">
                Programs acknowledged by institutions and employers worldwide.
              </i>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Statistics;
