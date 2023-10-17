import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
