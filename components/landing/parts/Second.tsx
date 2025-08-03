interface SecondProps {
  bgSecondColor: string;
  isDarkBgSecond: boolean;
}

const Second = ({ bgSecondColor, isDarkBgSecond }: SecondProps) => {
  return (
	<div style={{ backgroundColor: bgSecondColor }} className="h-full min-h-96 ">
	  <div className="mx-52">
		<article>
		  {/* Utilisez isDarkBgSecond ici si besoin pour le style ou le contenu */}
		</article>
	  </div>
	</div>
  );
};

export default Second;