import React from "react";
import Header from "../ui/Header";
import Hero from "./parts/Hero";
import Second from "./parts/Second";
import Footer from "../ui/Footer";
interface LandingMainProps {
  bgColor: string;
  isDarkBg: boolean;
}

const LandingMain = ({ bgColor, isDarkBg }: LandingMainProps) => {
  return (
    <>
      <div className="h-full">
				<Header isDarkBg={isDarkBg} />
        <Hero bgColor={bgColor} isDarkBg={isDarkBg} />
        <Second/>
				<Footer isDarkBg={isDarkBg} />
      </div>
    </>
  );
};

export default LandingMain;
