import React from "react";
import SideBar from "./ui/SideBar";
import Main from "./parts/Main";
import Footer from "../ui/Footer";
interface LandingMainProps {
  bgColor: string;
  isDarkBg: boolean;
}

const DashMain = ({ bgColor, isDarkBg }: LandingMainProps) => {
  return (
    <>
      <div className="h-full bg-white min-h-screen">
				<SideBar bgColor={bgColor} isDarkBg={isDarkBg} />
				<Main/>
      </div>
    </>
  );
};

export default DashMain;
