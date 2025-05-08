import React from "react";
import HeroSection from "./HeroSection";
import Slider from "../components/Slider";
import Express from "./Express";
import Info from "./Info";
import Statistics from "./Statistics";
import Testimonials from "./Testimonials";


const Home = () => {
  return (
    <>
      <HeroSection />
      <Slider />
      <Express />
      <Info />
      <Statistics />
      <Testimonials />
    </>
  );
};

export default Home;
