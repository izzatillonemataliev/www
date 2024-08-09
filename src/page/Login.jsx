import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import { FcGoogle } from "react-icons/fc"; 
import FormInput from "../components/FormInput"; 
import { Form } from "react-router-dom"; 
import { useState } from "react";
import { IoEyeSharp, IoEyeOffSharp } from "react-icons/io5"; // Ko'zcha ikonkalari

function Login() {
  const { signUpWithGoogle } = useLogin();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen grid place-items-center">
      <Form method="post" className="w-96">
        <h1 className="text-3xl font-bold text-center mb-4">Kirish</h1>
        <FormInput type="email" labelText="Email:" name="email" />
        <div className="relative text-center">
          <FormInput
            type={showPassword ? "text" : "password"} // Parol ko'rinishi boshqariladi
            labelText="Parol:"
            name="password"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-lg"
          >
            {showPassword ? <IoEyeOffSharp /> : <IoEyeSharp />} {/* Ko'zcha ikonkasi */}
          </button>
        </div>
        <div className="mt-6">
          <button className="btn btn-secondary btn-block">Kirish</button>
        </div>
        <button
          type="button"
          onClick={signUpWithGoogle}
          className="btn btn-primary mt-3 btn-block"
        >
          <FcGoogle className="text-3xl" />
          <span className="text-2xl">Google orqali</span>
        </button>

        <Link to="./register">
          <button className="btn">Ro'yxatdan o'tish</button>
        </Link>
      </Form>
    </div>
  );
}

export default Login;
