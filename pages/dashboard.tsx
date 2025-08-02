import DashMain from "@/components/dashboard/DashMain";

interface AboutProps {
  bgColor: string;
  isDarkBg: boolean;
}

export default function Dashboard({ bgColor, isDarkBg }: AboutProps) {
  return (
    <DashMain bgColor={bgColor} isDarkBg={isDarkBg} />
  );
}
