import React, { useEffect, useState } from "react";
import "./App.css";
import GetAdvice from "./DataServices/DataServices";

import dice from "./images/icon-dice.svg";
import divider from "./images/pattern-divider-desktop.svg";

function App() {
  const [dataID, setDataId] = useState(0);
  const [dataAdvice, setDataAdvice] = useState("");
  useEffect(() => {
    const ApiCall = async () => {
      let data = await GetAdvice();
      setDataAdvice(data.slip.advice);
      setDataId(data.slip.id);
    };
    ApiCall();
  }, [dataID, dataAdvice]);

  const NewAdvice = () => {
    const ApiCall = async () => {
      let data = await GetAdvice();
      setDataAdvice(data.slip.advice);
      setDataId(data.slip.id);
    };
    ApiCall();
  };

  return (
    <div className="mx-auto mt-80 flex justify-center">
      <div className="bg-[#323a49] rounded-lg h-[300px] w-[500px]">
        <h1 className="text-sm font-bold text-[#52ffa8] text-center  mt-10">
          A D V I C E # {dataID}
        </h1>
        <br />
        <p className="text-white text-center text-[28px]">"{dataAdvice}"</p>
        <br />
        <img src={divider} alt=""/>
        <button
          type="button"
          className="fixed font-medium rounded-full text-sm px-4 py-3.5 text-center me-2 mb-2 bg-[#52ffa8] my-auto"
          onClick={() => NewAdvice()}>
          <img src={dice} alt="dice" className="flex justify-center" />
        </button>
      </div>
    </div>
  );
}

export default App;
