import React from "react";
import styled from "styled-components"


export default function Checkbox({checked, setChecked }) {
  
    // Styling Question 

const Inputstyle = styled.input`
width: 30px;
font-size: 1.5em;
text-align: center;
width: 30px;
height: 30px;
`;
  

const InputColumn = styled.td`
display:flex;
align-items:center;
justify-content: center;
width: 200px;
align-items:center;
height: 70px;
`;


  return (
    <InputColumn>
      <Inputstyle checked={checked} maxLength="1" type="checkbox" onChange={e => setChecked(!checked)} />
    </InputColumn>
  );
}
