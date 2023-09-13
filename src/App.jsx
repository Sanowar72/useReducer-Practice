import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Reducer from "./assets/Reducer";
import UseContext from "./component/useContext/UseContext";

function App() {
  return (
    <>
      {/* <h1>Just Testing........</h1> */}
      <Reducer />
      <UseContext />
    </>
  );
}

export default App;
