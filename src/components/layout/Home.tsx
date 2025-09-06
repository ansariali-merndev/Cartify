import React from "react";
import { HeroSection } from "../Hero/HeroSection";
import { AboutSection } from "../Hero/AboutSection";
import { LatestSection } from "../Hero/LatestSection";
import { LetterSection } from "../Hero/LetterSection";

export const Home = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <AboutSection />
      <LatestSection />
      <LetterSection />
    </React.Fragment>
  );
};
