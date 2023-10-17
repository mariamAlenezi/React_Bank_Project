import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{ height: 50, backgroundColor: "red" }}>
      <Link to={"/"}>
        <button>Home</button>
      </Link>
    </div>
  );
};

export default Navbar;
