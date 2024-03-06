import { Link, Outlet } from "react-router-dom";

function Register() {
  return (
    <div>
      <Outlet />
      <div> Register </div>
      <form>
        <div>
          <p>Create Account</p>
        </div>
        <label htmlFor="name">Name</label>
        <input type="text" />

        <label htmlFor="username">Username</label>
        <input type="text" />

        <label htmlFor="email">Email</label>
        <input type="email" />

        <label htmlFor="password">Password</label>
        <input type="password" />

        <label htmlFor="confirm-password">Confirm Password</label>
        <input type="password" />

        <div>Account Type</div>
        <label htmlFor="student">
          <input type="radio" name="type" id="student" /> Student[
          <em>Searching for Apartment</em>]
        </label>
        <label htmlFor="agent">
          <input type="radio" name="type" id="agent" /> Agent
        </label>

        <p>
          By registering you accept our <Link>Terms of Use</Link> and{" "}
          <Link>Privacy</Link> Policies
        </p>

        <button>Register Now</button>

        <div>
          <p>
            Already have an Account?{" "}
            <Link to="/login">Click here to sign in</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register;
