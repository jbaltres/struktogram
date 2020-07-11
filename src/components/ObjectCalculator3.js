import React from "react";
import { antwortenFrage3 } from "../api/Data.js";
export default function ObjectCalculator3({
  posNum7,
  setPosNum7,
  posNum8,
  setPosNum8,
  posNum9,
  setPosNum9
}) {
  return (
    <>
      <h3>{antwortenFrage3[0]}</h3>
      <input
        value={posNum7}
        onChange={event => setPosNum7(event.target.value)}
      />
      <span>{posNum7}</span>
      <p>
        <h3>{antwortenFrage3[1]}</h3>
        <input
          value={posNum8}
          onChange={event => setPosNum8(event.target.value)}
        />
        <span>{posNum8}</span>
      </p>
      <h3>{antwortenFrage3[2]}</h3>
      <input
        value={posNum9}
        onChange={event => setPosNum9(event.target.value)}
      />
      <span>{posNum9}</span>
    </>
  );
}
