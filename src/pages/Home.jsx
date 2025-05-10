import React from "react";
import HeroSection from "../components/HeroSection";
import Slider from "../components/Slider";
import Express from "../components/Express";
import Welcome from "../components/Welcome";
import Statistics from "../components/Statistics";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Welcome />
      <Slider />
      <Statistics />
      <Express />
      <Testimonials />
    </>
  );
};

export default Home;
