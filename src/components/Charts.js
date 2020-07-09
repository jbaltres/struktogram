import React from "react";
import { Pie } from "react-chartjs-2";

const data = {
    labels: ["Blue", "Red", "Green"],
    datasets: [
      {
        label: "First dataset",
        data: [180, 120, 60],
        fill: true,
        backgroundColor: ["blue","red","green"],
        borderColor: "rgba(75,192,192,1)"
      },
    ]
  };

export default function PieChart() {
  return (
    <>
     <Pie data={data} /> 
    </>
  );
}
