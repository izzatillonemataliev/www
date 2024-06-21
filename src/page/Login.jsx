import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
function Login() {
  const { signUpWithGoogle } = useLogin();
  return (
    <div className="min-h-screen grid place-items-center">
      <Form method="post" className="w-96">
        <h1 className="text-3xl font-bold text-center mb-4">Log in</h1>
        <FormInput type="email" labelText="Email:" name="email" />
        <FormInput type="password" labelText="Password:" name="password" />
        <div className="mt-6">
          <button className=" btn btn-secondary btn-block">Log in</button>
        </div>
        <button
          type="button"
          onClick={signUpWithGoogle}
          className="btn btn-primary mt-3 btn-block"
        >
          <FcGoogle className="text-3xl" />
          <span className="text-2xl">Google</span>
        </button>

        <Link to="./register">
          <button className="btn">Register</button>
        </Link>
      </Form>
    </div>
  );
}

export default Login;
