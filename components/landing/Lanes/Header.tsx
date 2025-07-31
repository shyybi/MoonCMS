interface HeaderProps {
	isDarkBg: boolean;
}

const Header = ({ isDarkBg }: HeaderProps) => {
	return (
		<div className={`h-14 flex flex-row items-center text-xl ${isDarkBg ? "text-white" : "text-black"}`}>
			<a>Home</a>
		</div>
	)
}

export default Header;