import React from "react";
import { antwortenFrage5 } from "../api/Data.js";
export default function ObjectCalculator5({
  posNum13,
  setPosNum13,
  posNum14,
  setPosNum14,
  posNum15,
  setPosNum15
}) {
  return (
    <>
      <h3>{antwortenFrage5[0]}</h3>
      <input
        value={posNum13}
        onChange={event => setPosNum13(event.target.value)}
      />
      <span>{posNum13}</span>
      <p>
        <h3>{antwortenFrage5[1]}</h3>
        <input
          value={posNum14}
          onChange={event => setPosNum14(event.target.value)}
        />
        <span>{posNum14}</span>
      </p>
      <h3>{antwortenFrage5[2]}</h3>
      <input
        value={posNum15}
        onChange={event => setPosNum15(event.target.value)}
      />
      <span>{posNum15}</span>
    </>
  );
}
