import "./App.scss";
import { HashRouter, Route, Routes } from "react-router-dom";
import Welcome from "../src/components/Welcome";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app">
      <HashRouter>
        <Navbar />
        {/* <Loader /> */}
        <Welcome />
      </HashRouter>
    </div>
  );
}

export default App;
