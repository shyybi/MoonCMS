import React from "react";
interface HeaderProps {
	isDarkBg: boolean;
}

const Footer = ({ isDarkBg }: HeaderProps) => {
	return (
		<div className={`h-14 flex flex-row items-center mx-52 place-content-between ${isDarkBg ? "text-white" : "text-black"}`}>
				<a>Admin Username</a>
				<a>Powered by MoonCMS</a>
		</div>
	)
}

export default Footer;