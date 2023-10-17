import "./App.css";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import { useEffect, useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { checkToken, login, logout, register } from "./api/auth";
import { Route, Routes } from "react-router-dom";
import UserInfo from "./pages/UserInfo";

function App() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    setUser(checkToken());
  }, []);

  return (
    <div>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={Register} />
        <Route path="/me" Component={UserInfo} />
      </Routes>
    </div>
  );
}

export default App;
