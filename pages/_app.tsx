import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState, useEffect } from "react";

const bgColor = "#0c1530";
const bgSecondColor = "#4287f5";

// Fonction utilitaire pour déterminer si une couleur est "dark"
function isDark(hexColor: string): boolean {
  const hex = hexColor.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance < 0.5;
}

export default function App({ Component, pageProps }: AppProps) {
  const [isDarkBg, setIsDarkBg] = useState(true);
  const [isDarkBgSecond, setIsDarkBgSecond] = useState(true);

  useEffect(() => {
    setIsDarkBg(isDark(bgColor));
    setIsDarkBgSecond(isDark(bgSecondColor));
    document.body.style.backgroundColor = bgColor;
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <div style={{ backgroundColor: bgColor, minHeight: "100vh" }}>
      <Component
        {...pageProps}
        bgColor={bgColor}
        isDarkBg={isDarkBg}
        bgSecondColor={bgSecondColor}
        isDarkBgSecond={isDarkBgSecond}
      />
    </div>
  );
}
