import React from "react";
import HeroSection from "../components/Services/EPT-Academy/HeroSection";
import Welcome from "../components/Services/EPT-Academy/Welcome";
import Monologue from "../components/Services/EPT-Academy/Monologue";
import Courses from "../components/Services/EPT-Academy/Courses";
import InHouseTutors from "../components/Services/EPT-Academy/InHouseTutors";
import Testimonials from "../components/Services/EPT-Academy/Testimonials";

const EPTAcademy = () => {
  return (
    <>
      <HeroSection />
      <Welcome />
      <Monologue />
      <Courses />
      <InHouseTutors />
      <Testimonials />
    </>
  );
};

export default EPTAcademy;
