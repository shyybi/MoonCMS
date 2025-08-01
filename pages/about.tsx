import AboutMain from "@/components/about/AboutMain";

interface AboutProps {
  bgColor: string;
  isDarkBg: boolean;
}

export default function About({ bgColor, isDarkBg }: AboutProps) {
  return (
    <AboutMain bgColor={bgColor} isDarkBg={isDarkBg} />
  );
}
