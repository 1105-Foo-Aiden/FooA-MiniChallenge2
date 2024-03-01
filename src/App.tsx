import React, { useEffect, useState } from "react";
import "./App.css";
import GetAdvice from "./DataServices/DataServices";
import dice from "./images/icon-dice.svg";
import divider from "./images/pattern-divider-desktop.svg";
import { Advice } from "./Interfaces/DataServices";
import HomeComponent from "./Components/HomeComponent";

function App() {
  return (
    <>
      <HomeComponent />
    </>
  );
}

export default App;
