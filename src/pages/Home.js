import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="border border-black rounded-md flex flex-col justify-around items-center w-[500px] h-[500px]">
        <h1>Welcome to MoneyUp Bank </h1>
        <div className="flex justify-around items-center w-full">
          <Link to="/login">login</Link>
          <Link to="/register">register</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
