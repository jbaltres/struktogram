import React from "react";
export default function ObjectCalculator({...props}) 

{

return (
    <>
    
      <div style={{display:"flex",
            alignitems:"center",
            justifycontent: "center",
            padding: "20px 0px"}}>
       <input style={{width: "30px",
                  height: "30px",
                  fontSize: "1.5em",
                  margin: "5px",
                  textAlign: "center"}} {...props} />
      </div> 
   
    </>
  );
}
