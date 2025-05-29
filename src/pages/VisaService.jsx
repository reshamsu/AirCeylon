import React from "react";
import HeroSection from "../components/Services/Visa-Service/HeroSection";
import Welcome from "../components/Services/Visa-Service/Welcome";
import Contact from "../components/Services/Visa-Service/Contact";
import Statistics from "../components/Services/Visa-Service/Statistics";
import Europe from "../components/Services/Visa-Service/Countries/Europe";
import SouthAsia from "../components/Services/Visa-Service/Countries/SouthAsia";
import MiddleEast from "../components/Services/Visa-Service/Countries/MiddleEast";
import EastAsia from "../components/Services/Visa-Service/Countries/EastAsia";
import SouthEastAsia from "../components/Services/Visa-Service/Countries/SouthEastAsia";
// import Testimonials from "../components/Services/Visa-Service/Testimonials";

const VisaService = () => {
  return (
    <>
      <HeroSection />
      <Welcome />
      <Contact />
      <Statistics />
      <Europe />
      <EastAsia />      
      <MiddleEast />
      <SouthAsia />
      <SouthEastAsia />
      {/* <Testimonials /> */}
    </>
  );
};

export default VisaService;
