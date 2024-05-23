import { NavLink } from "react-router-dom";

export function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <input type="email" placeholder="Email address" />
        <input type="password" placeholder="Password" />
        <button>Login to yout account</button>
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
