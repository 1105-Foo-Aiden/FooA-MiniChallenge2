import { Advice } from "../Interfaces/DataServices";

export default async function GetAdvice() {
    const promise = await fetch("https://api.adviceslip.com/advice");
      const data: Advice = await promise.json();
      return data;
}