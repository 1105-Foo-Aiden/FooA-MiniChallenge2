import React, { useEffect, useState } from "react";
import GetAdvice from "../DataServices/DataServices";
import "../App.css";
import "../Styles/index.css";
import dice from "../images/icon-dice.svg";
import divider from "../images/pattern-divider-desktop.svg";
import { Advice } from "../Interfaces/DataServices";

const HomeComponent = () => {
  const [dataID, setDataId] = useState(0);
  const [dataAdvice, setDataAdvice] = useState("");

  useEffect(() => {
    const ApiCall = async () => {
      let data: Advice = await GetAdvice();
      setDataAdvice(data.slip.advice);
      setDataId(data.slip.id);
    };
    ApiCall();
  }, [dataID, dataAdvice]);

  const ApiCall = async () => {
    let data: Advice = await GetAdvice();
    setDataAdvice(data.slip.advice);
    setDataId(data.slip.id);
  };

  return (
    <div className="mx-auto mt-80 flex justify-center">
      <div className="bg-[#323a49] rounded-lg adviceContainer">
        <h1 className="text-sm font-bold text-[#52ffa8] text-center mt-10">
          A D V I C E # {dataID}
        </h1>
        <br />
        <p className="text-white text-center text-[28px]">"{dataAdvice}"</p>
        <br />
        <img src={divider} alt="" className="lg:pl-5" />
        <button
          type="button"
          className="diceButton font-medium rounded-full text-sm px-4 py-3.5 text-center flex justify-center bg-[#52ffa8]"
          onClick={() => ApiCall()}
        >
          <img src={dice} alt="dice" />
        </button>
      </div>
    </div>
  );
};

export default HomeComponent;
