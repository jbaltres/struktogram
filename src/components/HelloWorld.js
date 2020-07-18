import React, { useState } from "react";
import { antwortenF1 } from "../api/Data.js";
import { antwortenF2 } from "../api/Data.js";
import { antwortenF3 } from "../api/Data.js";
import { antwortenF4 } from "../api/Data.js";
import { antwortenF5 } from "../api/Data.js";
import { antwortenF6 } from "../api/Data.js";
import { antwortenF7 } from "../api/Data.js";
import { antwortenFrage8 } from "../api/Data.js";
import { antwortenFrage9 } from "../api/Data.js";
import { antwortenFrage10 } from "../api/Data.js";
import { fragen } from "../api/Data.js";
// import Counter from "./components/Counter";
import ObjectCalculator from "../components/ObjectCalculator";
import ObjectCalculator2 from "../components/ObjectCalculator2";
import ObjectCalculator3 from "../components/ObjectCalculator3";
import ObjectCalculator4 from "../components/ObjectCalculator4";
import ObjectCalculator5 from "../components/ObjectCalculator5";
import ObjectCalculator6 from "../components/ObjectCalculator6";
import ObjectCalculator7 from "../components/ObjectCalculator7";
// import ObjectCalculator8 from "../components/ObjectCalculator8";
import styled from "styled-components"

import PieChart from './Charts';
import Checkbox from "../components/Q8to10";

export default function HelloWorld() {

  const [posNum, setPosNum] = useState("+");
  const [posNum2, setPosNum2] = useState("-");
  const [posNum3, setPosNum3] = useState("0");
  const [posNum4, setPosNum4] = useState("0");
  const [posNum5, setPosNum5] = useState("+");
  const [posNum6, setPosNum6] = useState("-");
  const [posNum7, setPosNum7] = useState("0");
  const [posNum8, setPosNum8] = useState("+");
  const [posNum9, setPosNum9] = useState("-");
  const [posNum10, setPosNum10] = useState("0");
  const [posNum11, setPosNum11] = useState("+");
  const [posNum12, setPosNum12] = useState("-");
  const [posNum13, setPosNum13] = useState("0");
  const [posNum14, setPosNum14] = useState("-");
  const [posNum15, setPosNum15] = useState("-");
  const [posNum16, setPosNum16] = useState("0");
  const [posNum17, setPosNum17] = useState("+");
  const [posNum18, setPosNum18] = useState("-");
  const [posNum19, setPosNum19] = useState("0");
  const [posNum20, setPosNum20] = useState("+");
  const [posNum21, setPosNum21] = useState("-");
  const [checked22,setChecked22] = useState(false);
  const [checked23,setChecked23] = useState(false);
  const [checked24,setChecked24] = useState(false);
  const [checked25,setChecked25] = useState(false);
  const [checked26,setChecked26] = useState(false);
  const [checked27,setChecked27] = useState(false);
  const [checked28,setChecked28] = useState(false);
  const [checked29,setChecked29] = useState(false);
  const [checked30,setChecked30] = useState(false);
  const [checked31,setChecked31] = useState(false);
  const [checked32,setChecked32] = useState(false);
  const [checked33,setChecked33] = useState(false);
  const [checked34,setChecked34] = useState(false);
  const [checked35,setChecked35] = useState(false);
  const [checked36,setChecked36] = useState(false);
  const [checked37,setChecked37] = useState(false);
  const [checked38,setChecked38] = useState(false);
  const [checked39,setChecked39] = useState(false);

  const roteErgebnisse = {
    color: 'red'}

 const grueneErgebnisse = {
  color: 'green'}

  // Ein String wird erstellt um mit dem das Array verglichen werden kann
  const zwei = JSON.stringify(posNum + posNum2 + posNum3);
  console.log(zwei);
  // Jedes Objekt wird als string umgewandelt und es werden die ersten 3 Werte behalten
  const eins = antwortenF1.map(x =>
  JSON.stringify(x.Wert1 + x.Wert2 + x.Wert3)
  );
  console.log(eins);
  // Der Wert gibt an auf Welchem Index der State liegt
  const wert = eins.indexOf(zwei);
  console.log(wert);
  //
  const wertMitDemIchRechnenKann = wert < 0 ? wert + 1 : wert;
  console.log(wertMitDemIchRechnenKann);
  const Frage1wertRot =
  antwortenF1[wertMitDemIchRechnenKann].WertRot;
  const Frage1wertGruen =
  antwortenF1[wertMitDemIchRechnenKann].WertGruen;
  
  console.log(Frage1wertRot)
  console.log(Frage1wertGruen)
  //----------------Zweite Frage-----------------------------
  // Ein String wird erstellt um mit dem das Array verglichen werden kann
  
  const zweizwei = JSON.stringify(posNum4 + posNum5 + posNum6);
  console.log(zweizwei);
  // Jedes Objekt wird als string umgewandelt und es werden die ersten 3 Werte behalten
  const einszwei = antwortenF2.map(x => JSON.stringify(x.Wert1 + x.Wert2 + x.Wert3)
  );
  console.log(einszwei);
  // Der Wert gibt an auf Welchem Index der State liegt
  const wertzwei = einszwei.indexOf(zweizwei);
  console.log(wert);
  //
  const wert2MitDemIchRechnenKann = wertzwei < 0 ? wertzwei + 1 :
  wertzwei;
  console.log( wert2MitDemIchRechnenKann);
  const Frage2wertRot =
  antwortenF2[wert2MitDemIchRechnenKann].WertRot;
  const Frage2WertGruen =
  antwortenF2[wert2MitDemIchRechnenKann].WertGruen;
  console.log( Frage2wertRot);
  //----------------Dritte Frage-----------------------------
  // Ein String wird erstellt um mit dem das Array verglichen werden kann
  
  const stringInput3 = JSON.stringify(posNum7 + posNum8 + posNum9);
  console.log(stringInput3);
  // Jedes Objekt wird als string umgewandelt und es werden die ersten 3 Werte behalten
  const stringOfEveryObjectAnswers3 = antwortenF3.map(x => JSON.stringify(x.Wert1 + x.Wert2 + x.Wert3)
  );
  console.log(stringOfEveryObjectAnswers3);
  // Der Wert gibt an auf Welchem Index der State liegt
  const IndexOfInputfieldstring3 = stringOfEveryObjectAnswers3.indexOf(stringInput3);
  console.log(wert);
  //
  const newPositiveValue3 = IndexOfInputfieldstring3 < 0 ? IndexOfInputfieldstring3 + 1 :
  IndexOfInputfieldstring3;
  console.log( newPositiveValue3);
  const Frage3WertRot =
  antwortenF3[newPositiveValue3].WertRot;
  const Frage3WertGruen =
  antwortenF3[newPositiveValue3].WertGruen;
//----------------Vierte Frage-----------------------------
  // Ein String wird erstellt um mit dem das Array verglichen werden kann
  
  const stringInput101112 = JSON.stringify(posNum10 + posNum11 + posNum12);
  console.log(stringInput101112);
  // Jedes Objekt wird als string umgewandelt und es werden die ersten 3 Werte behalten
  const stringOfEveryObjectAnswers4 = antwortenF4.map(x => JSON.stringify(x.Wert1 + x.Wert2 + x.Wert3)
  );
  // Der Wert gibt an auf Welchem Index der State liegt
  const IndexOfInputfieldstring4 = stringOfEveryObjectAnswers4.indexOf(stringInput101112);
  
  const newPositiveValue4 = IndexOfInputfieldstring4 < 0 ? IndexOfInputfieldstring4 + 1 :
  IndexOfInputfieldstring4;

  const Frage4WertRot =
  antwortenF4[newPositiveValue4].WertRot;
  const Frage4WertGruen =
  antwortenF4[newPositiveValue4].WertGruen;
  
  //----------------Fünfte Frage-----------------------------
  // Ein String wird erstellt um mit dem das Array verglichen werden kann
  
  const stringInput131415 = JSON.stringify(posNum13 + posNum14 + posNum15);
  console.log(stringInput131415);
  // Jedes Objekt wird als string umgewandelt und es werden die ersten 3 Werte behalten
  const stringOfEveryObjectAnswers5 = antwortenF5.map(x => JSON.stringify(x.Wert1 + x.Wert2 + x.Wert3)
  );
  // Der Wert gibt an auf Welchem Index der State liegt
  const IndexOfInputfieldstring5 = stringOfEveryObjectAnswers5.indexOf(stringInput131415);
  
  const newPositiveValue5 = IndexOfInputfieldstring5 < 0 ? IndexOfInputfieldstring5 + 1 :
  IndexOfInputfieldstring5;

  const Frage5WertRot =
  antwortenF5[newPositiveValue5].WertRot;
  const Frage5WertGruen =
  antwortenF5[newPositiveValue5].WertGruen;
  //----------------Sechste Frage-----------------------------
  // Ein String wird erstellt um mit dem das Array verglichen werden kann
  
  const stringInput161718 = JSON.stringify(posNum16 + posNum17 + posNum18);
  console.log(stringInput161718);
  // Jedes Objekt wird als string umgewandelt und es werden die ersten 3 Werte behalten
  const stringOfEveryObjectAnswers6 = antwortenF6.map(x => JSON.stringify(x.Wert1 + x.Wert2 + x.Wert3)
  );
  // Der Wert gibt an auf Welchem Index der State liegt
  const IndexOfInputfieldstring6 = stringOfEveryObjectAnswers6.indexOf(stringInput161718);
  
  const newPositiveValue6 = IndexOfInputfieldstring6 < 0 ? IndexOfInputfieldstring6 + 1 :
  IndexOfInputfieldstring6;

  const Frage6WertRot =
  antwortenF6[newPositiveValue6].WertRot;
  const Frage6WertGruen =
  antwortenF6[newPositiveValue6].WertGruen;
  //----------------Siebte Frage-----------------------------
  // Ein String wird erstellt um mit dem das Array verglichen werden kann
  
  const stringInput192021 = JSON.stringify(posNum19 + posNum20 + posNum21);
  console.log(stringInput192021);
  // Jedes Objekt wird als string umgewandelt und es werden die ersten 3 Werte behalten
  const stringOfEveryObjectAnswers7 = antwortenF7.map(x => JSON.stringify(x.Wert1 + x.Wert2 + x.Wert3)
  );
  // Der Wert gibt an auf Welchem Index der State liegt
  const IndexOfInputfieldstring7 = stringOfEveryObjectAnswers7.indexOf(stringInput192021);
  
  const newPositiveValue7 = IndexOfInputfieldstring7 < 0 ? IndexOfInputfieldstring7 + 1 :
  IndexOfInputfieldstring7;

  const Frage7WertRot =
  antwortenF7[newPositiveValue7].WertRot;
  const Frage7WertGruen =
  antwortenF7[newPositiveValue7].WertGruen;


  // -------------------Question 8----------------------------------------------------------------

  const inputfieldvalue22 = checked22 ? 1 : 0;
  const inputfieldvalue23 = checked23 ? 3 : 0;
  const inputfieldvalue24 = checked24 ? 5 : 0;
  const inputfieldvalue25 = checked25 ? 10 : 0;
  const inputfieldvalue26 = checked26 ? 20 : 0;
  const inputfieldvalue27 = checked27 ? 40 : 0;
 
  const summeFrage8 = inputfieldvalue22 + inputfieldvalue23 + inputfieldvalue24 + inputfieldvalue25 + inputfieldvalue26 + inputfieldvalue27
  
  const Frage8WertGruen = (
    summeFrage8 === 14 ? -1 : // if 
    summeFrage8 === 24 ? -1 : // else if 
    summeFrage8 === 16 ? -1 : // else if
    summeFrage8 === 46 ? 2 : // else if
    summeFrage8 === 31 ? -1 : // else if
    summeFrage8 === 51 ? -1 : // else if
    summeFrage8 === 28 ? -1 : // else if
    summeFrage8 === 48 ? 2 : // else if
    summeFrage8 === 33 ? -1 : // else if
    summeFrage8 === 63 ? -1 : // else if
    summeFrage8 === 55 ? -1 : // else if
    summeFrage8 === 65 ? -1 : 0// else 
  );

  const Frage8WertRot = (
    summeFrage8 === 14 ? 1 : // if 
    summeFrage8 === 24 ? -2 : // else if 
    summeFrage8 === 16 ? 1 : // else if
    summeFrage8 === 46 ? 1 : // else if
    summeFrage8 === 31 ? 1 : // else if
    summeFrage8 === 51 ? 1 : // else if
    summeFrage8 === 28 ? -2 : // else if
    summeFrage8 === 48 ? 1 : // else if
    summeFrage8 === 33 ? -2 : // else if
    summeFrage8 === 63 ? -2 : // else if
    summeFrage8 === 55 ? 1 : // else if
    summeFrage8 === 65 ? 1 : 0// else 
  );

  // -------------------Question 9----------------------------------------------------------------

  const inputfieldvalue28 = checked28 ? 7 : 0;
  const inputfieldvalue29 = checked29 ? 8 : 0;
  const inputfieldvalue30 = checked30 ? 52 : 0;
  const inputfieldvalue31 = checked31 ? 102 : 0;
  const inputfieldvalue32 = checked32 ? 202 : 0;
  const inputfieldvalue33 = checked33 ? 402 : 0;

  const summeFrage9 = inputfieldvalue28 + inputfieldvalue29 + inputfieldvalue30 + inputfieldvalue31 + inputfieldvalue32 + inputfieldvalue33
  
  const Frage9WertGruen = (
    summeFrage9 === 24 ? 2 : // if 
    summeFrage9 === 44 ? -1 : // else if 
    summeFrage9 === 16 ? -1 : // else if
    summeFrage9 === 26 ? 2 : // else if
    summeFrage9 === 31 ? 2 : // else if
    summeFrage9 === 61 ? 2 : // else if
    summeFrage9 === 18 ? -1 : // else if
    summeFrage9 === 48 ? -1 : // else if
    summeFrage9 === 53 ? -1 : // else if
    summeFrage9 === 63 ? -1 : // else if
    summeFrage9 === 35 ? -1 : // else if
    summeFrage9 === 55 ? -1 : 0// else 
  );

  const Frage9WertRot = (
    summeFrage9 === 24 ? 1: // if 
    summeFrage9 === 44 ? 1 : // else if 
    summeFrage9 === 16 ? -2 : // else if
    summeFrage9 === 26 ? 1 : // else if
    summeFrage9 === 31 ? 1 : // else if
    summeFrage9 === 61 ? 1 : // else if
    summeFrage9 === 18 ? -2 : // else if
    summeFrage9 === 48 ? 1 : // else if
    summeFrage9 === 53 ? 1 : // else if
    summeFrage9 === 63 ? 1 : // else if
    summeFrage9 === 35 ? -2 : // else if
    summeFrage9 === 55 ? -2 : 0// else 
  );

  // -------------------Question 10----------------------------------------------------------------

  const inputfieldvalue34 = checked34 ? 13 : 0;
  const inputfieldvalue35 = checked35 ? 33: 0;
  const inputfieldvalue36 = checked36 ? 53 : 0;
  const inputfieldvalue37 = checked37 ? 103: 0;
  const inputfieldvalue38 = checked38 ? 203: 0;
  const inputfieldvalue39 = checked39 ? 403 : 0;

const summeFrage10 = inputfieldvalue34 + inputfieldvalue35 + inputfieldvalue36 + inputfieldvalue37 + inputfieldvalue38 + inputfieldvalue39
  
let Frage10WertGruen;
switch(summeFrage10) {
  case 9:
   Frage10WertGruen = -1;
   break;
  case 24:
   Frage10WertGruen = -1;
   break;
   case 26:
   Frage10WertGruen = -1;
   break;
   case 31:
   Frage10WertGruen = -1;
   break;
   case 51:
   Frage10WertGruen = 2;
   break;
   case 61:
   Frage10WertGruen = -1;
   break;
   case 18:
   Frage10WertGruen = -1;
   break;
   case 28:
   Frage10WertGruen = -1;
   break;
   case 48:
   Frage10WertGruen = -1;
   break;
   case 53:
   Frage10WertGruen = 2;
   break;
   case 35:
   Frage10WertGruen = 2;
   break;
   case 70:
   Frage10WertGruen = 2;
   break;
  default:
   Frage10WertGruen = 0;
}


    const Frage10WertRot = (
      summeFrage10 === 9 ? 1 : // if 
      summeFrage10 === 24 ? -2 : // else if 
      summeFrage10 === 26 ? -2 : // else if
      summeFrage10 === 31 ? -2 : // else if
      summeFrage10 === 51 ? 1: // else if
      summeFrage10 === 61 ? -2 : // else if
      summeFrage10 === 18 ? 1 : // else if
      summeFrage10 === 28 ? 1 : // else if
      summeFrage10 === 48 ? 1 : // else if
      summeFrage10 === 53 ? 1 : // else if
      summeFrage10 === 35 ? 1 : // else if
      summeFrage10 === 70 ? 1 : 0)// else 

    // -------------------Summe--------------------------------------------------------------


  const ergebnisRot= Frage1wertRot + Frage2wertRot + Frage3WertRot + Frage4WertRot + Frage5WertRot + Frage6WertRot + Frage7WertRot + Frage8WertRot + Frage9WertRot + Frage10WertRot
  const ergebnisGruen = Frage1wertGruen + Frage2WertGruen + Frage3WertGruen + Frage4WertGruen + Frage5WertGruen + Frage6WertGruen + Frage7WertGruen + Frage8WertGruen + Frage9WertGruen + Frage10WertGruen
  console.log(ergebnisRot)
  console.log(ergebnisGruen)
// -------------------Styling----------------------------------------------------------------
  // Styling Box

  const Box = styled.h1`
  display: flex;
  justify-content:center;
  flex-direction: column;
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  width: 50% ;
  margin-left: 25%;
  background: #232426;
`;

// Styling Header 
const QuestionHead = styled.section`
  padding: 30px;
  background: papayawhip;
`;


  if ( wert && wertzwei && IndexOfInputfieldstring3 && IndexOfInputfieldstring4 && IndexOfInputfieldstring5 && IndexOfInputfieldstring6 && IndexOfInputfieldstring7 >= 0) {
  return (
  <>
  <Box>
    <QuestionHead>
  <div>{fragen[0]}</div>
  </QuestionHead>

  <ObjectCalculator
    posNum={posNum}
    setPosNum={setPosNum}
    posNum2={posNum2}
    setPosNum2={setPosNum2}
    posNum3={posNum3}
    setPosNum3={setPosNum3}
  />
  </Box>
  <p />
   Nächste Frage
   <Box>
    <QuestionHead>
  <div>{fragen[1]}</div>
  </QuestionHead>
    <ObjectCalculator2
      posNum4={posNum4} 
      setPosNum4={setPosNum4}
      posNum5={posNum5}
      setPosNum5={setPosNum5}
      posNum6={posNum6}
      setPosNum6={setPosNum6}
  />
  </Box>
  <p />
   Nächste Frage
   <Box>
    <QuestionHead>
  <div>{fragen[2]}</div>
  </QuestionHead>
    <ObjectCalculator3
      posNum7={posNum7} 
      setPosNum7={setPosNum7}
      posNum8={posNum8}
      setPosNum8={setPosNum8}
      posNum9={posNum9}
      setPosNum9={setPosNum9}
  />
  </Box>
    <p />
    <Box>
    <QuestionHead>
  <div>{fragen[3]}</div>
  </QuestionHead>
    <ObjectCalculator4
      posNum10={posNum10} 
      setPosNum10={setPosNum10}
      posNum11={posNum11}
      setPosNum11={setPosNum11}
      posNum12={posNum12}
      setPosNum12={setPosNum12}
  />
  </Box>
    <p />
    <Box>
      <QuestionHead>
  <div>{fragen[4]}</div>
      </QuestionHead>
    <ObjectCalculator5
      posNum13={posNum13} 
      setPosNum13={setPosNum13}
      posNum14={posNum14}
      setPosNum14={setPosNum14}
      posNum15={posNum15}
      setPosNum15={setPosNum15}
  />
    </Box>
    <p />
    <Box>
      <QuestionHead>
  <div>{fragen[5]}</div>
      </QuestionHead>
    <ObjectCalculator6
      posNum16={posNum16} 
      setPosNum16={setPosNum16}
      posNum17={posNum17}
      setPosNum17={setPosNum17}
      posNum18={posNum18}
      setPosNum18={setPosNum18}
  />
  </Box>
    <p />
  <Box>
    <QuestionHead>
  <div>{fragen[6]}</div>
  </QuestionHead>
    <ObjectCalculator7
      posNum19={posNum19} 
      setPosNum19={setPosNum19}
      posNum20={posNum20}
      setPosNum20={setPosNum20}
      posNum21={posNum21}
      setPosNum21={setPosNum21}
  />
  </Box>
  <Box>
  <QuestionHead>
  <div>{fragen[7]}</div>
  </QuestionHead>
  {antwortenFrage8[0]}
  <Checkbox checked={inputfieldvalue22 + inputfieldvalue23 + inputfieldvalue24 + inputfieldvalue25 + inputfieldvalue26 + inputfieldvalue27 ===  1 ||
                     inputfieldvalue22 + inputfieldvalue23 + inputfieldvalue24+ inputfieldvalue25 + inputfieldvalue26 + inputfieldvalue27 ===  4 ||
                     inputfieldvalue22 + inputfieldvalue23 + inputfieldvalue24 + inputfieldvalue25 + inputfieldvalue26 + inputfieldvalue27===  6 ||
                     inputfieldvalue22 + inputfieldvalue23 + inputfieldvalue24+ inputfieldvalue25 + inputfieldvalue26 + inputfieldvalue27 ===  11 ||
                     inputfieldvalue22 + inputfieldvalue23 + inputfieldvalue24+ inputfieldvalue25 + inputfieldvalue26 + inputfieldvalue27 ===  21 ||
                     inputfieldvalue22 + inputfieldvalue23 + inputfieldvalue24 + inputfieldvalue25 + inputfieldvalue26 + inputfieldvalue27===  41 ||
                     inputfieldvalue22 + inputfieldvalue23 + inputfieldvalue24 + inputfieldvalue25 + inputfieldvalue26 + inputfieldvalue27===  9 ||
                     inputfieldvalue22 + inputfieldvalue23 + inputfieldvalue24 + inputfieldvalue25 + inputfieldvalue26 + inputfieldvalue27===  14 ||
                     inputfieldvalue22 + inputfieldvalue23 + inputfieldvalue24 + inputfieldvalue25 + inputfieldvalue26 + inputfieldvalue27===  24 ||
                     inputfieldvalue22 + inputfieldvalue23 + inputfieldvalue24 + inputfieldvalue25 + inputfieldvalue26 + inputfieldvalue27===  44 ||
                     inputfieldvalue22 + inputfieldvalue23 + inputfieldvalue24 + inputfieldvalue25 + inputfieldvalue26 + inputfieldvalue27===  16 ||
                     inputfieldvalue22 + inputfieldvalue23 + inputfieldvalue24 + inputfieldvalue25 + inputfieldvalue26 + inputfieldvalue27===  26 ||
                     inputfieldvalue22 + inputfieldvalue23 + inputfieldvalue24 + inputfieldvalue25 + inputfieldvalue26 + inputfieldvalue27===  61 ||
                     inputfieldvalue22 + inputfieldvalue23 + inputfieldvalue24 + inputfieldvalue25 + inputfieldvalue26 + inputfieldvalue27===  31 } setChecked={setChecked22} inputfieldvalue={inputfieldvalue22} />
  {antwortenFrage8[1]}
  <Checkbox checked={checked23} setChecked={setChecked23} inputfieldvalue={inputfieldvalue23} />
  {antwortenFrage8[2]}
  <Checkbox checked={checked24} setChecked={setChecked24} inputfieldvalue={inputfieldvalue24} />
  {antwortenFrage8[3]}
  <Checkbox checked={checked25} setChecked={setChecked25} inputfieldvalue={inputfieldvalue25} />
  {antwortenFrage8[4]}
  <Checkbox checked={checked26} setChecked={setChecked26} inputfieldvalue={inputfieldvalue26} />
  {antwortenFrage8[5]}
  <Checkbox checked={checked27} setChecked={setChecked27} inputfieldvalue={inputfieldvalue27} />
  </Box>
  <Box>
  <QuestionHead>
  <div>{fragen[8]}</div>
  </QuestionHead>
  {antwortenFrage9[0]}
  <Checkbox checked={checked28} setChecked={setChecked28} inputfieldvalue={inputfieldvalue28} />
  {antwortenFrage9[1]}
  <Checkbox checked={checked29} setChecked={setChecked29} inputfieldvalue={inputfieldvalue29} />
  {antwortenFrage9[2]}
  <Checkbox checked={checked30} setChecked={setChecked30} inputfieldvalue={inputfieldvalue30} />
  {antwortenFrage9[3]}
  <Checkbox checked={checked31} setChecked={setChecked31} inputfieldvalue={inputfieldvalue31} />
  {antwortenFrage9[4]}
  <Checkbox checked={checked32} setChecked={setChecked32} inputfieldvalue={inputfieldvalue32} />
  {antwortenFrage9[5]}
  <Checkbox checked={checked33} setChecked={setChecked33} inputfieldvalue={inputfieldvalue33} />
  </Box>
  <Box>
  <QuestionHead>
  <div>{fragen[9]}</div>
  </QuestionHead>
  {antwortenFrage10[0]}
  <Checkbox checked={checked34} setChecked={setChecked34} inputfieldvalue={inputfieldvalue34} />
  {antwortenFrage10[1]}
  <Checkbox checked={checked35} setChecked={setChecked35} inputfieldvalue={inputfieldvalue35} />
  {antwortenFrage10[2]}
  <Checkbox checked={checked36} setChecked={setChecked36} inputfieldvalue={inputfieldvalue36} />
  {antwortenFrage10[3]}
  <Checkbox checked={checked37} setChecked={setChecked37} inputfieldvalue={inputfieldvalue37} />
  {antwortenFrage10[4]}
  <Checkbox checked={checked38} setChecked={setChecked38} inputfieldvalue={inputfieldvalue38} />
  {antwortenFrage10[5]}
  <Checkbox checked={checked39} setChecked={setChecked39} inputfieldvalue={inputfieldvalue39} />
  </Box>
  <h3>Q81{inputfieldvalue22}</h3>
  <h3>Q82{inputfieldvalue23}</h3>
Q83{inputfieldvalue24}
Q84{inputfieldvalue25}
Q85{inputfieldvalue26}
Q86{inputfieldvalue27}
Q91{inputfieldvalue28}
Q92{inputfieldvalue29}
Q93{inputfieldvalue30}
Q94{inputfieldvalue31}
Q95{inputfieldvalue32}
Q96{inputfieldvalue33}
Q101{inputfieldvalue34}
Q102{inputfieldvalue35}
Q103{inputfieldvalue36}
Q104:{inputfieldvalue37}
Q105:{inputfieldvalue38}
Q106:{inputfieldvalue39}
  <p style={roteErgebnisse}>{Frage1wertRot}</p>
  <p style={grueneErgebnisse}>{Frage1wertGruen}</p>
  <p style={roteErgebnisse}>{Frage2wertRot}</p>
  <p style={grueneErgebnisse}>{Frage2WertGruen}</p>
  <p style={roteErgebnisse}>{Frage3WertRot}</p>
  <p style={grueneErgebnisse}>{Frage3WertGruen}</p>
  <p style={roteErgebnisse}>{Frage4WertRot}</p>
  <p style={grueneErgebnisse}>{Frage3WertGruen}</p>
  <p style={roteErgebnisse}>{Frage5WertRot}</p>
  <p style={grueneErgebnisse}>{Frage3WertGruen}</p>
  <p style={roteErgebnisse}>{Frage6WertRot}</p>
  <p style={grueneErgebnisse}>{Frage3WertGruen}</p>
  <p style={roteErgebnisse}>{Frage7WertRot}</p>
  <p style={grueneErgebnisse}>{Frage3WertGruen}</p>

  <p style={roteErgebnisse}>{ergebnisRot} Das ist die Summer der Roten
  Ergebnisse</p>
  <p style={grueneErgebnisse}>{ergebnisGruen} Das ist die Summer der grünen
  Ergebnisse</p>
  <PieChart iVR={ergebnisRot} iGR={ergebnisGruen}/>
  </>
  );
  }
  return (
    <>
    <Box>
      <QuestionHead>
    <div>{fragen[0]}</div>
    </QuestionHead>
  
    <ObjectCalculator
      posNum={posNum}
      setPosNum={setPosNum}
      posNum2={posNum2}
      setPosNum2={setPosNum2}
      posNum3={posNum3}
      setPosNum3={setPosNum3}
    />
    </Box>
    <p />
     Nächste Frage
     <Box>
      <QuestionHead>
    <div>{fragen[1]}</div>
    </QuestionHead>
      <ObjectCalculator2
        posNum4={posNum4} 
        setPosNum4={setPosNum4}
        posNum5={posNum5}
        setPosNum5={setPosNum5}
        posNum6={posNum6}
        setPosNum6={setPosNum6}
    />
    </Box>
    <p />
     Nächste Frage
     <Box>
      <QuestionHead>
    <div>{fragen[2]}</div>
    </QuestionHead>
      <ObjectCalculator3
        posNum7={posNum7} 
        setPosNum7={setPosNum7}
        posNum8={posNum8}
        setPosNum8={setPosNum8}
        posNum9={posNum9}
        setPosNum9={setPosNum9}
    />
    </Box>
      <p />
      <Box>
      <QuestionHead>
    <div>{fragen[3]}</div>
    </QuestionHead>
      <ObjectCalculator4
        posNum10={posNum10} 
        setPosNum10={setPosNum10}
        posNum11={posNum11}
        setPosNum11={setPosNum11}
        posNum12={posNum12}
        setPosNum12={setPosNum12}
    />
    </Box>
      <p />
      <Box>
        <QuestionHead>
    <div>{fragen[4]}</div>
        </QuestionHead>
      <ObjectCalculator5
        posNum13={posNum13} 
        setPosNum13={setPosNum13}
        posNum14={posNum14}
        setPosNum14={setPosNum14}
        posNum15={posNum15}
        setPosNum15={setPosNum15}
    />
      </Box>
      <p />
      <Box>
        <QuestionHead>
    <div>{fragen[5]}</div>
        </QuestionHead>
      <ObjectCalculator6
        posNum16={posNum16} 
        setPosNum16={setPosNum16}
        posNum17={posNum17}
        setPosNum17={setPosNum17}
        posNum18={posNum18}
        setPosNum18={setPosNum18}
    />
    </Box>
      <p />
    <Box>
      <QuestionHead>
    <div>{fragen[6]}</div>
    </QuestionHead>
      <ObjectCalculator7
        posNum19={posNum19} 
        setPosNum19={setPosNum19}
        posNum20={posNum20}
        setPosNum20={setPosNum20}
        posNum21={posNum21}
        setPosNum21={setPosNum21}
    />
    </Box>
    <Checkbox checked={checked22} setChecked={setChecked22} inputfieldvalue={inputfieldvalue22} />
    <Checkbox checked={checked23} setChecked={setChecked23} inputfieldvalue={inputfieldvalue23} />
    <Checkbox checked={checked24} setChecked={setChecked24} inputfieldvalue={inputfieldvalue24} />
    <Checkbox checked={checked25} setChecked={setChecked25} inputfieldvalue={inputfieldvalue25} />
    <Checkbox checked={checked26} setChecked={setChecked26} inputfieldvalue={inputfieldvalue26} />
    <Checkbox checked={checked27} setChecked={setChecked27} inputfieldvalue={inputfieldvalue27} />
    <Checkbox checked={checked28} setChecked={setChecked28} inputfieldvalue={inputfieldvalue28} />
    <Checkbox checked={checked29} setChecked={setChecked29} inputfieldvalue={inputfieldvalue29} />
    <Checkbox checked={checked30} setChecked={setChecked30} inputfieldvalue={inputfieldvalue30} />
    <Checkbox checked={checked31} setChecked={setChecked31} inputfieldvalue={inputfieldvalue31} />
    <Checkbox checked={checked32} setChecked={setChecked32} inputfieldvalue={inputfieldvalue32} />
    <Checkbox checked={checked33} setChecked={setChecked33} inputfieldvalue={inputfieldvalue33} />
    <Checkbox checked={checked34} setChecked={setChecked34} inputfieldvalue={inputfieldvalue34} />
    <Checkbox checked={checked35} setChecked={setChecked35} inputfieldvalue={inputfieldvalue35} />
    <Checkbox checked={checked36} setChecked={setChecked36} inputfieldvalue={inputfieldvalue36} />
    <Checkbox checked={checked37} setChecked={setChecked37} inputfieldvalue={inputfieldvalue37} />
    <Checkbox checked={checked38} setChecked={setChecked38} inputfieldvalue={inputfieldvalue38} />
    <Checkbox checked={checked39} setChecked={setChecked39} inputfieldvalue={inputfieldvalue39} />
    <h3>Q81{inputfieldvalue22}</h3>
  <h3>Q82{inputfieldvalue23}</h3>
Q83{inputfieldvalue24}
Q84{inputfieldvalue25}
Q85{inputfieldvalue26}
Q86{inputfieldvalue27}
Q91{inputfieldvalue28}
Q92{inputfieldvalue29}
Q93{inputfieldvalue30}
Q94{inputfieldvalue31}
Q95{inputfieldvalue32}
Q96{inputfieldvalue33}
Q101{inputfieldvalue34}
Q102{inputfieldvalue35}
Q103{inputfieldvalue36}
Q104{inputfieldvalue37}
Q105{inputfieldvalue38}
Q106{inputfieldvalue39}
    <p style={roteErgebnisse}>{Frage1wertRot}</p>
    <p style={grueneErgebnisse}>{Frage1wertGruen}</p>
    <p style={roteErgebnisse}>{Frage2wertRot}</p>
    <p style={grueneErgebnisse}>{Frage2WertGruen}</p>
    <p style={roteErgebnisse}>{Frage3WertRot}</p>
    <p style={grueneErgebnisse}>{Frage3WertGruen}</p>
    <p style={roteErgebnisse}>{Frage4WertRot}</p>
    <p style={grueneErgebnisse}>{Frage3WertGruen}</p>
    <p style={roteErgebnisse}>{Frage5WertRot}</p>
    <p style={grueneErgebnisse}>{Frage3WertGruen}</p>
    <p style={roteErgebnisse}>{Frage6WertRot}</p>
    <p style={grueneErgebnisse}>{Frage3WertGruen}</p>
    <p style={roteErgebnisse}>{Frage7WertRot}</p>
    <p style={grueneErgebnisse}>{Frage3WertGruen}</p>
  
    <p style={roteErgebnisse}>{ergebnisRot} Das ist die Summer der Roten
    Ergebnisse</p>
    <p style={grueneErgebnisse}>{ergebnisGruen} Das ist die Summer der grünen
    Ergebnisse</p>
    <PieChart iVR={ergebnisRot} iGR={ergebnisGruen}/>
    </>
    );
  }
  

