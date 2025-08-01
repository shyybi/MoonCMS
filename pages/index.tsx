import LandingMain from "@/components/landing/LandingMain";
import { useState, useEffect } from "react";

const bgColor = "#0c1530";

export default function Home() {
  const [isDarkBg, setIsDarkBg] = useState(true);

  useEffect(() => {
    const hex = bgColor.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    setIsDarkBg(luminance < 0.5);
  }, []);

  return (
    <div style={{ backgroundColor: bgColor, minHeight: "100vh" }}>
      <LandingMain bgColor={bgColor} isDarkBg={isDarkBg} />
    </div>
  );
}
