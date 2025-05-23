import React from "react";
import HeroSection from "../components/Homepage/HeroSection";
import Slider from "../components/Homepage/Slider";
import Express from "../components/Homepage/Express";
import Welcome from "../components/Homepage/Welcome";
import Statistics from "../components/Homepage/Statistics";
import Testimonials from "../components/Homepage/Testimonials";

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
