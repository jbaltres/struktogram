import React from "react";
export default function ObjectCalculator({...props}) 

{

return (
    <>
    
      <div style={{display:"flex",
            alignitems:"center",
            justifycontent: "center",
            padding: "20px 0px"}}>
       <select style={{
                  fontSize: "1.5em"
       }} {...props}>
      <option value=""></option>
      <option value="0">0</option>
      <option value="+">+</option>
      <option value="-">-</option>
    </select>
    <br/>
    <br/>
      </div> 
   
    </>
  );
}

