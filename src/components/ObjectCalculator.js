import React from "react";
import { antwortenFrage1 } from "../api/Data.js";
import styled from "styled-components"
export default function ObjectCalculator({
  posNum,
  setPosNum,
  posNum2,
  setPosNum2,
  posNum3,
  setPosNum3
}) 

{

  // Styling Question 
const QuestionBody = styled.section`
font-size: 16px;
color: white;
padding: 0px 20px
`;
  return (
    <>
    <p>
    <QuestionBody>
    <>{antwortenFrage1[0]}</>
    </QuestionBody>
      
      <input value={posNum} maxLength="1" onChange={event => setPosNum(event.target.value)} />
      <span>{posNum}</span>
      </p>
      <p>
        <QuestionBody>{antwortenFrage1[1]}</QuestionBody>
        <input
          value={posNum2}
          maxLength="1"
          onChange={event => setPosNum2(event.target.value)}
        />
        <span>{posNum2}</span>
      </p>
      <p>
      <QuestionBody>{antwortenFrage1[2]}</QuestionBody>
      <input
        value={posNum3}
        maxLength="1"
        onChange={event => setPosNum3(event.target.value)}
      />
      <span>{posNum3}</span>
      </p>
    </>
  );
}
