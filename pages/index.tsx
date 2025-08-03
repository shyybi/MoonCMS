import LandingMain from "@/components/landing/LandingMain";


interface HomeProps {
  bgColor: string;
  isDarkBg: boolean;
  bgSecondColor: string;
  isDarkBgSecond: boolean;
}

export default function Home({ bgColor, isDarkBg, bgSecondColor, isDarkBgSecond }: HomeProps) {
  return (
    <LandingMain
      bgColor={bgColor}
      isDarkBg={isDarkBg}
      bgSecondColor={bgSecondColor}
      isDarkBgSecond={isDarkBgSecond}
    />
  );
}
