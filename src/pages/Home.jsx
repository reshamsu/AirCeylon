import React from "react";
import HeroSection from "../components/HeroSection";
import Slider from "../components/Slider";
import Express from "../components/Express";
import Info from "../components/Info";
import Statistics from "../components/Statistics";
import Testimonials from "../components/Testimonials";


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
