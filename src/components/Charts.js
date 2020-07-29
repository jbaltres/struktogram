import React from "react";
import { Pie } from "react-chartjs-2";



export default function PieChart({iVR,iGR}) {
  const data = {
    labels: ["Green", "Red", "Blue"],
    datasets: [
      {
        label: "First dataset",
        data: [12+iGR, 12+iVR-iGR, 12-iVR],
        fill: true,
        backgroundColor: ["greenyellow","tomato","lightblue"],
        borderColor: "rgba(75,192,192,1)"
      },
    ]
  };
  
  return (
    <>
     <Pie data={data} /> 
    </>
  );
}
