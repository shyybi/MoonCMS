import { useState, useEffect } from "react";

const bgColorSecond = "#4287f5";

const Second = () => {
	const [isDarkBgScd, setIsDarkBgScd] = useState(true);
	
		useEffect(() => {
			const hex = bgColorSecond.replace("#", "");
			const r = parseInt(hex.substring(0, 2), 16);
			const g = parseInt(hex.substring(2, 4), 16);
			const b = parseInt(hex.substring(4, 6), 16);
			const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
			setIsDarkBgScd(luminance < 0.5);
		}, []);
  return (
	<div style={{ backgroundColor: bgColorSecond}} className="h-full min-h-96 ">
	  <div className="mx-52">
			<article>
				
			</article>
		</div>
	</div>
  );
};

export default Second;