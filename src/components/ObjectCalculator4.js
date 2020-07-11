import React from "react";
import { antwortenFrage4 } from "../api/Data.js";
export default function ObjectCalculator4({
  posNum10,
  setPosNum10,
  posNum11,
  setPosNum11,
  posNum12,
  setPosNum12
}) {
  return (
    <>
      <h3>{antwortenFrage4[0]}</h3>
      <input
        value={posNum10}
        onChange={event => setPosNum10(event.target.value)}
      />
      <span>{posNum10}</span>
      <p>
        <h3>{antwortenFrage4[1]}</h3>
        <input
          value={posNum11}
          onChange={event => setPosNum11(event.target.value)}
        />
        <span>{posNum11}</span>
      </p>
      <h3>{antwortenFrage4[2]}</h3>
      <input
        value={posNum12}
        onChange={event => setPosNum12(event.target.value)}
      />
      <span>{posNum12}</span>
    </>
  );
}
