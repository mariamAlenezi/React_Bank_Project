import "./App.css";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import { useEffect, useState } from "react";
import Login from "./pages/Login";
import { checkToken, login, logout, register } from "./api/auth";
import { Route, Routes } from "react-router-dom";
import ArrayInfo from "./components/ArrayInfo";
import Register from "./pages/Register";
import UserContext from "./context/usercontext";
import HomePage from "./pages/HomePage";

function App() {
  const [user, setUser] = useState(false);
  useEffect(() => {
    setUser(checkToken());
  }, []);

  return (
    <UserContext.Provider value={[user, setUser]}>
      <div>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/home" Component={HomePage} />
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
          <Route path="/me" Component={ArrayInfo} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
