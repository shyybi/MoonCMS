import React from "react";
import Header from "../ui/Header";
import Main from "./parts/Main";
import Footer from "../ui/Footer";

interface LoginMainProps {
  bgColor: string;
  isDarkBg: boolean;
}

const LoginMain = ({ bgColor, isDarkBg }: LoginMainProps) => {
  return (
    <>
      <div className="h-full">
        <Header isDarkBg={isDarkBg} />
        <Main bgColor={bgColor} isDarkBg={isDarkBg} />
        <Footer isDarkBg={isDarkBg} />
      </div>
    </>
  );
};

export default LoginMain;
