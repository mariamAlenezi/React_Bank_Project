import { Input } from "@material-tailwind/react";
import { useMutation } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { login } from "../api/auth";
import UserContext from "../context/usercontext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userInfo, setUserInfo] = useState({});
  const [user, setUser] = useContext(UserContext);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setUserInfo(() => ({ ...userInfo, [e.target.name]: e.target.value }));
  };

  const { mutate: mutate_login } = useMutation({
    mutationKey: ["login"],
    mutationFn: () => login(userInfo),
    onSuccess: () => {
      setUser(true);
      navigate("/home");
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    mutate_login();
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="border border-black rounded-md flex flex-col justify-around items-center w-[500px] h-[500px]">
        <div className="flex flex-col">
          <input
            className=""
            placeholder="username"
            name="username"
            onChange={handleChange}
          />
          <input
            className=""
            placeholder="password"
            name="password"
            onChange={handleChange}
          />
          <button onClick={handleSubmit}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
