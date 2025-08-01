import Link from "next/link";
import React from "react";
interface HeaderProps {
	isDarkBg: boolean;
}

const Header = ({ isDarkBg }: HeaderProps) => {
	return (
		<div className={`h-14 flex flex-row items-center mx-52 ${isDarkBg ? "text-white" : "text-black"}`}>
			<div className="flex flex-row space-x-10 text-xl">
				<Link href="/">Home</Link>
				<Link href="/about">About</Link>
			</div>
			<button
				className={`ml-auto px-6 py-1 text-lg rounded-2xl ${isDarkBg ? "bg-white text-black" : "bg-black text-white"}`}
			>
				<Link href="/login">
					Login
				</Link>
			</button>
		</div>
	)
}

export default Header;