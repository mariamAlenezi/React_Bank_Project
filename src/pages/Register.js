import { useMutation } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { register } from "../api/auth";
import UserContext from "../context/usercontext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [userInfo, setUserInfo] = useState({});
  const [user, setUser] = useContext(UserContext);
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationKey: ["register"],
    mutationFn: () => register(userInfo),
    onSuccess: () => {
      setUser(true);
      navigate("/home");
    },
  });
  const handleChnage = (e) => {
    if (e.target.name == "image") {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.files[0] });
    } else {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = () => {
    mutate();
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="border border-black rounded-md flex flex-col justify-around items-center w-[500px] h-[500px]">
        <div className="flex flex-col">
          <input
            className=""
            placeholder="username"
            name="username"
            onChange={handleChnage}
          />
          <input
            className=""
            placeholder="password"
            name="password"
            onChange={handleChnage}
          />
          <input
            className=""
            placeholder="image"
            name="image"
            type="file"
            onChange={handleChnage}
          />
          <button onClick={handleSubmit}>register</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
