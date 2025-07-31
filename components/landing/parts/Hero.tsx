import React, { useState, useEffect } from "react";
import Header from "@/components/ui/Header";
import Image from "next/image";
import placeholder from "@/public/img/placeholder.png";

const bgColor = "#0c1530"

const Hero = () => {
	const [isDarkBg, setIsDarkBg] = useState(true);
	useEffect(() => {
		const hex = bgColor.replace("#", "");
		const r = parseInt(hex.substring(0,2),16);
		const g = parseInt(hex.substring(2,4),16);
		const b = parseInt(hex.substring(4,6),16);
		const luminance = (0.299*r + 0.587*g + 0.114*b)/255;
		setIsDarkBg(luminance < 0.5);
	}, []);

	return (
		<div className="h-[40rem]  " style={{ backgroundColor: bgColor }}>
			<div className="mx-52">
				<Header isDarkBg={isDarkBg} />
			</div>
			<div className="flex -mt-15 flex-col items-center justify-center h-full " >
				<Image src={placeholder} alt="Placeholder image" width={124}/>
				<a className={`text-2xl mt-5 ${isDarkBg ? "text-white" : "text-black"}`}>
					Description PlaceHolder
				</a>
			</div>
		</div>
	);
};

export default Hero;