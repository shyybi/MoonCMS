import React, { useState } from "react";
import SideBar, { DashboardCategory } from "./ui/SideBar";
import Posts from "./pages/Posts";
import Pages from "./pages/Pages";
import Tags from "./pages/Tags";
import Members from "./pages/Members";
import Settings from "./pages/Settings";

interface DashMainProps {
  bgColor: string;
  isDarkBg: boolean;
}

const DashMain = ({ bgColor, isDarkBg }: DashMainProps) => {
  const [category, setCategory] = useState<DashboardCategory>("posts");

  const renderContent = () => {
    switch (category) {
      case "posts":
        return <Posts />;
      case "pages":
        return <Pages />;
      case "tags":
        return <Tags />;
      case "members":
        return <Members />;
      case "settings":
        return <Settings />;
      default:
        return <Posts />;
    }
  };

  return (
    <div className="flex min-h-screen">
      <SideBar
        bgColor={bgColor}
        isDarkBg={isDarkBg}
        category={category}
        setCategory={setCategory}
      />
      <main className="flex-1 p-8 bg-gray-50">
        {renderContent()}
      </main>
    </div>
  );
};

export default DashMain;
