import React from "react";
import HeroSection from "../components/About/HeroSection";
import Welcome from "../components/About/Welcome";
import Goal from "../components/About/Goal";
import Journey from "../components/About/Journey";
import Values from "../components/About/Values";
import Inititives from "../components/About/Inititives";
import Message from "../components/About/Message";

const About = () => {
  return (
    <>
      <HeroSection />
      <Welcome />
      <Goal />
      <Journey />
      <Values />
      <Inititives />
      <Message />
    </>
  );
};

export default About;
