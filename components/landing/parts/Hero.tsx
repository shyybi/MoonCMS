import React from "react";
import Image from "next/image";
import placeholder from "@/public/img/placeholder.png";

interface HeroProps {
  bgColor: string;
  isDarkBg: boolean;
}

const Hero = ({ bgColor, isDarkBg }: HeroProps) => {
  return (
    <div className="h-[30rem] flex flex-col mt-14" style={{ backgroundColor: bgColor }}>
      <div className="flex flex-col items-center justify-center h-fit mt-24" >
        <Image src={placeholder} alt="Placeholder image" width={124}/>
        <a className={`text-2xl mt-5 ${isDarkBg ? "text-white" : "text-black"}`}>
          Description PlaceHolder
        </a>
      </div> 
    </div>
  );
};

export default Hero;