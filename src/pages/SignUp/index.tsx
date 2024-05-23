import { NavLink } from "react-router-dom";

export function SignUp() {
  return (
    <div>
      <h1>Sign Up</h1>
      <form>
        <input type="email" placeholder="Email address" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Repeat password" />
        <button>Create an account</button>
        <span>
          Already have an account?
          <NavLink to="/login" title="Login">
            Login
          </NavLink>
        </span>
      </form>
    </div>
  );
}
