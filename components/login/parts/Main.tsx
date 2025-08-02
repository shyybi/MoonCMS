import Form from "./Form";
import { useState, useEffect } from "react";

const bgColorLogin = "#4287f5";

interface MainProps {
  bgColor: string;
  isDarkBg: boolean;
}

const Main = ({ bgColor, isDarkBg }: MainProps) => {
  const [isDarkBgLogin, setIsDarkBgLogin] = useState(true);

  useEffect(() => {
    const hex = bgColorLogin.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    setIsDarkBgLogin(luminance < 0.5);
  }, []);

  return (
    <div 
      className="min-h-96 flex items-center justify-center px-4 py-56"
      style={{ backgroundColor: bgColorLogin }}
    >
      <div className="w-full max-w-md">
        <Form isDarkBg={isDarkBgLogin} />
      </div>
    </div>
  );
};

export default Main;