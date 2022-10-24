import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <form>
        <input type="text" />
        <input type="password" />
        <button type="submit">Sign In</button>
      </form>
      <p>
        New? <Link to="/register">Create your account</Link>
      </p>
    </>
  );
}

export default Login;
