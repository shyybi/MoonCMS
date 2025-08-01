import LandingMain from "@/components/landing/LandingMain";

interface HomeProps {
  bgColor: string;
  isDarkBg: boolean;
}

export default function Home({ bgColor, isDarkBg }: HomeProps) {
  return (
    <LandingMain bgColor={bgColor} isDarkBg={isDarkBg} />
  );
}
