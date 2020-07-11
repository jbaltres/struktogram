import React from "react";
import { antwortenFrage7 } from "../api/Data.js";
export default function ObjectCalculator7({
  posNum19,
  setPosNum19,
  posNum20,
  setPosNum20,
  posNum21,
  setPosNum21
}) {
  return (
    <>
      <h3>{antwortenFrage7[0]}</h3>
      <input
        value={posNum19}
        onChange={event => setPosNum19(event.target.value)}
      />
      <span>{posNum19}</span>
      <p>
        <h3>{antwortenFrage7[1]}</h3>
        <input
          value={posNum20}
          onChange={event => setPosNum20(event.target.value)}
        />
        <span>{posNum20}</span>
      </p>
      <h3>{antwortenFrage7[2]}</h3>
      <input
        value={posNum21}
        onChange={event => setPosNum21(event.target.value)}
      />
      <span>{posNum21}</span>
    </>
  );
}
