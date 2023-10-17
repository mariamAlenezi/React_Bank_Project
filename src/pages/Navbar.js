import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{ height: 50, backgroundColor: "red" }}>
      <Link to={"/"}>
        <button>Home</button>
      </Link>
      <Link to={"/login"}>
        <button>Login</button>
      </Link>
      <Link to={"/register"}>
        <button>Register</button>
      </Link>
      <Link to={"/me"}>
        <button>Profile</button>
      </Link>
    </div>
  );
};

export default Navbar;
