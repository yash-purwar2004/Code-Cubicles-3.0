import RegisterForm from "@/components/auth/register-form"
import Particles from "@/components/magicui/particles"

const RegisterPage = () => {
  return (
    <div className="flex items-center w-[40vw] items-center justify-center">
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        size={2}
        color={"#000000"}
        refresh
      />
      <RegisterForm />
    </div>
  )
}

export default RegisterPage