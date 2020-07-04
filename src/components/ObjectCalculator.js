import React from "react";
import { antwortenFrage1 } from "../api/Data.js";
export default function ObjectCalculator({
  posNum,
  setPosNum,
  posNum2,
  setPosNum2,
  posNum3,
  setPosNum3
}) {
  return (
    <>
      <h3>{antwortenFrage1[0]}</h3>
      <input value={posNum} maxLength="1" onChange={event => setPosNum(event.target.value)} />
      <span>{posNum}</span>
      <p>
        <h3>{antwortenFrage1[1]}</h3>
        <input
          value={posNum2}
          maxLength="1"
          onChange={event => setPosNum2(event.target.value)}
        />
        <span>{posNum2}</span>
      </p>
      <h3>{antwortenFrage1[2]}</h3>
      <input
        value={posNum3}
        maxLength="1"
        onChange={event => setPosNum3(event.target.value)}
      />
      <span>{posNum3}</span>
    </>
  );
}
