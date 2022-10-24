import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <>
      <p>ini Register</p>
      <p>
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </>
  );
}

export default Register;
