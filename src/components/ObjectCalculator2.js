import React from "react";
import { antwortenFrage2 } from "../api/Data.js";
export default function ObjectCalculator2({
  posNum4,
  setPosNum4,
  posNum5,
  setPosNum5,
  posNum100,
  setPosNum6
}) {
  return (
    <>
      <h3>{antwortenFrage2[0]}</h3>
      <input
        value={posNum4}
        onChange={event => setPosNum4(event.target.value)}
      />
      <span>{posNum4}</span>
      <p>
        <h3>{antwortenFrage2[1]}</h3>
        <input
          value={posNum5}
          onChange={event => setPosNum5(event.target.value)}
        />
        <span>{posNum5}</span>
      </p>
      <h3>{antwortenFrage2[2]}</h3>
      <input
        value={posNum100}
        onChange={event => setPosNum6(event.target.value)}
      />
      <span>{posNum100}</span>
    </>
  );
}
