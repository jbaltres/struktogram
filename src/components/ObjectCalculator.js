import React from "react";
import { antwortenFrage1 } from "../api/Data.js";
export default function ObjectCalculator({...props}) 

{

return (
    <>
    <div style={{display: "flex",
            alignItems: "center",
            border: "solid silver 2px",
            backgroundColor: "grey",
            justifyContent: "space-around",
            marginBottom: "3px"}}>
      <div style={{display: "flex",
            alignItems: "center",
            height: "50px",
            margin: "5px",
      }}>
        {antwortenFrage1[1]}
      </div>
      <div style={{display:"flex",
            alignitems:"center",
            justifycontent: "center",
            padding: "20px 0px"}}>
       <input style={{width: "30px",
                  height: "30px",
                  fontSize: "1.5em",
                  textAlign: "center"}} {...props} ></input>
      </div> 
    </div>
    </>
  );
}
