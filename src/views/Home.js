import React from "react";
// import sections
import Hero from "../components/sections/Hero";
import FeaturesTiles from "../components/sections/FeaturesTiles";
import FeaturesSplit from "../components/sections/FeaturesSplit";
import Testimonial from "../components/sections/Testimonial";
import Cta from "../components/sections/Cta";
import AddElement from "../components/AddElement";

const Home = () => {
  return (
    <>
      <Hero className="illustration-section-01" />
      <AddElement />
      <FeaturesTiles />
      <AddElement />
      <FeaturesSplit
        invertMobile
        topDivider
        imageFill
        className="illustration-section-02"
      />
      <AddElement />
      <Testimonial topDivider />
      <AddElement />
      <Cta split />
      <AddElement />
    </>
  );
};

export default Home;
