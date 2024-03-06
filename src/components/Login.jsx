import { Link, Outlet, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  function handleSubmit() {
    navigate("/dashboard");
  }

  return (
    <>
      <Outlet />
      <div>Login</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" />

        <label htmlFor="password">Password</label>
        <input type="password" />

        <button type="submit">Sign in</button>

        <div>
          <p>
            Forget password? <Link>Click here to reset password</Link>
          </p>
          <p>
            Don&apos;t have an account?{" "}
            <Link to="/register">Click here to register</Link>
          </p>
        </div>
      </form>
    </>
  );
}

export default Login;
