import { NavLink } from "react-router-dom";
import { Input } from "./styles";

export function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <Input type="email" placeholder="Email address" />
        <Input type="password" placeholder="Password" />
        <button>Login to your account</button>
        <span>
          Don`t have an account?
          <NavLink to={"/sign-up"} title="Sign up">
            Sign up
          </NavLink>
        </span>
      </form>
    </div>
  );
}
