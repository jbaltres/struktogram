import React from "react";
import { antwortenFrage6 } from "../api/Data.js";
export default function ObjectCalculator4({
  posNum16,
  setPosNum16,
  posNum17,
  setPosNum17,
  posNum18,
  setPosNum18
}) {
  return (
    <>
      <h3>{antwortenFrage6[0]}</h3>
      <input
        value={posNum16}
        onChange={event => setPosNum16(event.target.value)}
      />
      <span>{posNum16}</span>
      <p>
        <h3>{antwortenFrage6[1]}</h3>
        <input
          value={posNum17}
          onChange={event => setPosNum17(event.target.value)}
        />
        <span>{posNum17}</span>
      </p>
      <h3>{antwortenFrage6[2]}</h3>
      <input
        value={posNum18}
        onChange={event => setPosNum18(event.target.value)}
      />
      <span>{posNum18}</span>
    </>
  );
}
