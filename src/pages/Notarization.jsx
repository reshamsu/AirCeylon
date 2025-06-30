import React from "react";
import HeroSection from "../components/Services/Notarization/HeroSection";
// import Welcome from "../components/Services/Notarization/Welcome";
import Process from "../components/Services/Notarization/Process";
import Procedure from "../components/Services/Notarization/Procedure";
import FAQ from "../components/Services/Notarization/FAQ";

const Notarization = () => {
  return (
    <>
      <HeroSection />
      {/* <Welcome /> */}
      <Process />
      <Procedure />
      <FAQ />
    </>
  );
};

export default Notarization;
