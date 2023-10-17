import instance from ".";
import jwt_decode from "jwt-decode";

const login = async (userInfo) => {
  const res = await instance.post("/mini-project/api/auth/login", userInfo);
  storetoken(res.data?.token);

  return res.data;
};

const register = async (userInfo) => {
  const formData = new FormData();

  for (let key in userInfo) {
    formData.append(key, userInfo[key]);
  }

  const res = await instance.post("/mini-project/api/auth/register", formData);
  storetoken(res.data?.token);
  return res.data;
};

const storetoken = (token) => {
  localStorage.setItem("token", token);
};

const checkToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    const decode = jwt_decode(token);
    const cureentTime = Date.now() / 1000;
    if (decode.exp < cureentTime) {
      localStorage.removeItem("token");
      return false;
    } else {
      return true;
    }
  }
  return false;
};

export { login, register, checkToken };
