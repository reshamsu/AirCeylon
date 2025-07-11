import React from "react";
import HeroSection from "../components/Services/EPTAcademy/HeroSection";
import Welcome from "../components/Services/EPTAcademy/Welcome";
import Monologue from "../components/Services/EPTAcademy/Monologue";
import Packages from "../components/Services/EPTAcademy/Packages";
// import Statistics from "../components/Services/EPTAcademy/Statistics";
import Testimonials from "../components/Services/EPTAcademy/Testimonials";
import Contact from "../components/Services/EPTAcademy/Contact";

const EPTAcademy = () => {
  return (
    <>
      <HeroSection />
      <Welcome />
      <Monologue />
      <Packages />
      {/* <Statistics /> */}
      <Testimonials />
      <Contact />
    </>
  );
};

export default EPTAcademy;
