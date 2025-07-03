import React from "react";
import HeroSection from "../components/Services/Notarization/HeroSection";
import Definitions from "../components/Services/Notarization/Definitions";
import ForWhom from "../components/Services/Notarization/ForWhom";
import Documentation from "../components/Services/Notarization/Documentation";
import Steps from "../components/Services/Notarization/Steps";
import Testimonials from "../components/Services/Notarization/Testimonials";
import FAQ from "../components/Services/Notarization/FAQ";

const Notarization = () => {
  return (
    <>
      <HeroSection />
      <Definitions />
      <ForWhom />
      <Documentation />
      <Steps />
      <Testimonials />
      <FAQ />
    </>
  );
};

export default Notarization;
