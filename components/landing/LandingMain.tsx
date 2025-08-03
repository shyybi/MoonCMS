import React from "react";
import Header from "../ui/Header";
import Hero from "./parts/Hero";
import Second from "./parts/Second";
import Footer from "../ui/Footer";

interface LandingMainProps {
  bgColor: string;
  isDarkBg: boolean;
  bgSecondColor: string;
  isDarkBgSecond: boolean;
}

const LandingMain = ({ bgColor, isDarkBg, bgSecondColor, isDarkBgSecond }: LandingMainProps) => {
  return (
    <>
      <div className="h-full">
        <Header isDarkBg={isDarkBg} />
        <Hero bgColor={bgColor} isDarkBg={isDarkBg} />
        <Second bgSecondColor={bgSecondColor} isDarkBgSecond={isDarkBgSecond} />
        <Footer isDarkBg={isDarkBg} />
      </div>
    </>
  );
};

export default LandingMain;
