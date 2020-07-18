import React from "react";
import styled from "styled-components"


export default function Checkbox({checked, setChecked }) {
  
    // Styling Question 
const QuestionBody = styled.section`
font-size: 16px;
color: white;
padding: 0px 20px
`;


  return (
    <QuestionBody>
      <input checked={checked} maxLength="1" type="checkbox" onChange={e => setChecked(!checked)} />
    </QuestionBody>
  );
}
