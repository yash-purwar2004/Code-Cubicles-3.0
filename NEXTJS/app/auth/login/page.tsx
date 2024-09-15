import LoginForm from '@/components/auth/login-form'
import { TypewriterEffect } from "../../../components/ui/typewriter-effect";
import Particles from "@/components/magicui/particles";
const LoginPage = () => {
  const words = [
    {
      text: "Empowering",
    },
    {
      text: "support",
    },
    {
      text: "with",
    },
    {
      text: "Personalized",
    },
    {
      text: "Insights",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col md:flex-row justify-center items-center rounded py-10 gap-10 px-10 ">
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        size={2}
        color={"#000000"}
        refresh
      />
      <div className=" flex justify-end pr-10">
        <TypewriterEffect words={words} className="text-5xl font-bold" />
      </div>
      <div className=" flex justify-start">
        <div className="w-full max-w-md xl:w-full md:w-full z-10">
          <LoginForm />
        </div>
      </div>
    </div>
  )
}

export default LoginPage