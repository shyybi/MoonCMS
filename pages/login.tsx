import LoginMain from "@/components/login/LoginMain";

interface LoginProps {
  bgColor: string;
  isDarkBg: boolean;
}

export default function Login({ bgColor, isDarkBg }: LoginProps) {
  return (
    <LoginMain bgColor={bgColor} isDarkBg={isDarkBg} />
  );
}
