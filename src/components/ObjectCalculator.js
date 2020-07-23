import React from "react";
import { antwortenFrage1 } from "../api/Data.js";
import styled from "styled-components"
export default function ObjectCalculator({
  stateQuestion1,
  setStateQuestion1,
  stateQuestion2,
  setStateQuestion2,
  stateQuestion3,
  setStateQuestion3
}) 

{
const Inputstyle = styled.input`
width: 30px;
font-size: 1.5em;
text-align: center;
`;
  
const Container = styled.tr`
display: flex;
align-items: center;
border: solid silver 2px;
background-color: grey;
margin-bottom: 3px;

`;

const InputColumn = styled.td`
display:flex;
align-items:center;
justify-content: center;
width: 200px;
align-items:center;
height: 70px;
padding: 20px 0px;
`;

const QuestionColumn = styled.div`
display: flex; 
align-items: center;
height: 50px;
margin: 5px;
height: 70px;
`;

return (
    <>
    <Container>
      <QuestionColumn>
        {antwortenFrage1[0]}
      </QuestionColumn>
      <InputColumn>
       <Inputstyle value={stateQuestion1} maxLength="1" onChange={event => setStateQuestion1(event.target.value)} />
       <span>{stateQuestion1}</span>
      </InputColumn> 
    </Container>
    <Container>
      <QuestionColumn>
        {antwortenFrage1[1]}
      </QuestionColumn>
      <InputColumn>
        <Inputstyle
          value={stateQuestion2}
          maxLength="1"
          onChange={event => setStateQuestion2(event.target.value)}
        />
        <span>{stateQuestion2}</span>
      </InputColumn>
    </Container>  
    <Container>
      <QuestionColumn>
       {antwortenFrage1[2]}
      </QuestionColumn>
      <InputColumn>
      <Inputstyle
        value={stateQuestion3}
        maxLength="1"
        onChange={event => setStateQuestion3(event.target.value)}
      />
      <span>{stateQuestion3}</span>
      </InputColumn>
    </Container>
    </>
  );
}
