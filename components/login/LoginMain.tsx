import React from "react";
import Header from "../ui/Header";
import Main from "./parts/Main";
import Footer from "../ui/Footer";
interface LandingMainProps {
  bgColor: string;
  isDarkBg: boolean;
}

const LoginMain = ({ bgColor, isDarkBg }: LandingMainProps) => {
  return (
    <>
      <div className="h-full">
				<Header isDarkBg={isDarkBg} />
				<Main/>
				<Footer isDarkBg={isDarkBg} />
      </div>
    </>
  );
};

export default LoginMain;
