import React, { useState } from "react";
import { antwortenF1, fragenZusatz, antwortenF2, antwortenF3, antwortenF4, antwortenF5, antwortenF6, antwortenF7, antwortenFrage8, antwortenFrage9, antwortenFrage10, antwortenFrage1, antwortenFrage2, antwortenFrage3, antwortenFrage4, antwortenFrage5, antwortenFrage6, antwortenFrage7, handlungsbeschreibung11, handlungsbeschreibung12, handlungsbeschreibung13, handlungsbeschreibung14, handlungsbeschreibung2 } from "../api/Data.js";
import { fragen } from "../api/Data.js";
// import Counter from "./components/Counter";
import ObjectCalculator from "../components/ObjectCalculator";
// import ObjectCalculator8 from "../components/ObjectCalculator8";
import styled from "styled-components"

import PieChart from './Charts';
import Checkbox from "../components/Q8to10";
import '../Media.css';

export default function HelloWorld() {

  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [value5, setValue5] = useState("");
  const [value6, setValue6] = useState("");
  const [value7, setValue7] = useState("");
  const [value8, setValue8] = useState("");
  const [value9, setValue9] = useState("");
  const [value10, setValue10] = useState("");
  const [value11, setValue11] = useState("");
  const [value12, setValue12] = useState("");
  const [value13, setValue13] = useState("");
  const [value14, setValue14] = useState("");
  const [value15, setValue15] = useState("");
  const [value16, setValue16] = useState("");
  const [value17, setValue17] = useState("");
  const [value18, setValue18] = useState("");
  const [value19, setValue19] = useState("");
  const [value20, setValue20] = useState("");
  const [value21, setValue21] = useState("");
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
  const zwei = JSON.stringify(value1 + value2 + value3);
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
  
  const zweizwei = JSON.stringify(value4 + value5 + value6);
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
  
  const stringInput3 = JSON.stringify(value7 + value8 + value9);
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
  
  const stringInput101112 = JSON.stringify(value10 + value11 + value12);
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
  
  const stringInput131415 = JSON.stringify(value13 + value14 + value15);
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
  
  const stringInput161718 = JSON.stringify(value16 + value17 + value18);
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
  
  const stringInput192021 = JSON.stringify(value19 + value20 + value21);
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

  const inputfieldvalue28 = checked28 ? 1 : 0;
  const inputfieldvalue29 = checked29 ? 3 : 0;
  const inputfieldvalue30 = checked30 ? 5 : 0;
  const inputfieldvalue31 = checked31 ? 10 : 0;
  const inputfieldvalue32 = checked32 ? 20 : 0;
  const inputfieldvalue33 = checked33 ? 40 : 0;

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

  const inputfieldvalue34 = checked34 ? 1 : 0;
  const inputfieldvalue35 = checked35 ? 3: 0;
  const inputfieldvalue36 = checked36 ? 5 : 0;
  const inputfieldvalue37 = checked37 ? 10: 0;
  const inputfieldvalue38 = checked38 ? 20: 0;
  const inputfieldvalue39 = checked39 ? 40 : 0;

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

// -------------------const render Chart8----------------------------------------------------------------

const renderchart8 = (
  summeFrage8 === 9 ? true :
  summeFrage8 === 24 ? true : 
  summeFrage8 === 26 ? true : 
  summeFrage8 === 31 ? true : 
  summeFrage8 === 51 ? true : 
  summeFrage8 === 61 ? true : 
  summeFrage8 === 18 ? true : 
  summeFrage8 === 28 ? true : 
  summeFrage8 === 48 ? true : 
  summeFrage8 === 53 ? true : 
  summeFrage8 === 35 ? true : 
  summeFrage8 === 70 ? true : 
  summeFrage8 === 14	? true : 
  summeFrage8 === 44	? true : 
  summeFrage8 === 16 ? true :  
  summeFrage8 === 46	? true : 
  summeFrage8 === 33 ? true : 
  summeFrage8 === 63 ? true : 
  summeFrage8 === 55 ? true : 
  summeFrage8 === 65 ? true : false	)

  // ------------------- const render Chart9 ----------------------------------------------------------------

  const renderchart9 = (
    summeFrage9 === 9 ? true :
    summeFrage9 === 24 ? true : 
    summeFrage9 === 26 ? true : 
    summeFrage9 === 31 ? true : 
    summeFrage9 === 51 ? true : 
    summeFrage8 === 61 ? true : 
    summeFrage9 === 18 ? true : 
    summeFrage9 === 28 ? true : 
    summeFrage9 === 48 ? true : 
    summeFrage9 === 53 ? true : 
    summeFrage9 === 35 ? true : 
    summeFrage9 === 70 ? true : 
    summeFrage9 === 14	? true : 
    summeFrage9 === 44	? true : 
    summeFrage9 === 16 ? true :  
    summeFrage9 === 46	? true : 
    summeFrage9 === 33 ? true : 
    summeFrage9 === 63 ? true : 
    summeFrage9 === 55 ? true : 
    summeFrage9 === 65 ? true : false	)

// -------------------const render Chart10----------------------------------------------------------------

const renderchart10 = (
  summeFrage10 === 9 ? true :
  summeFrage10 === 24 ? true : 
  summeFrage10 === 26 ? true : 
  summeFrage10 === 31 ? true : 
  summeFrage10 === 51 ? true : 
  summeFrage10 === 61 ? true : 
  summeFrage10 === 18 ? true : 
  summeFrage10 === 28 ? true : 
  summeFrage10 === 48 ? true : 
  summeFrage10 === 53 ? true : 
  summeFrage10 === 35 ? true : 
  summeFrage10 === 70 ? true : 
  summeFrage10 === 14	? true : 
  summeFrage10 === 44	? true : 
  summeFrage10 === 16 ? true :  
  summeFrage10 === 46	? true : 
  summeFrage10 === 33 ? true : 
  summeFrage10 === 63 ? true : 
  summeFrage10 === 55 ? true : 
  summeFrage10 === 65 ? true : false	)

// -------------------Styling----------------------------------------------------------------

  // Styling Box

  const Container1 = {
  display: "flex", 
  flexWrap: "wrap",
  alignItems:"center",
  justifyContent: "space-around",
  margin: "0px 7px",
  background:"#232426",
  flexwrap:"wrap"
  }

const Item1 = {
color: "white",
width: "400px",
margin: "30px",
border: "solid silver 2px",
padding: "5px"
}

const Item11 = {
  color: "white",
  margin: "30px",
  border: "solid silver 2px",
  padding: "5px",
  textAlign: "start"
  }

  const Item12 = {
    color: "white",
    margin: "30px",
    padding: "5px", 
    }

const Item2 = {
  color: "white",
  margin: "10px auto",

  }

  const Credits = {
    color: "white",
    fontSize: "7px"
  }


const QuestionColumn = styled.div`
display: flex; 
align-items: center;
width: 200%;
margin: 5px;
height: 70px;
`;

const TableRowQ8to10 = styled.tr`
display: flex;
align-items: center;
border: solid silver 2px;
background-color: grey;
margin-bottom: 3px;
padding: 5px;
`;

const Headline = styled.span`
color :${props => props.textcolor};
font-size: 2.3em;
@media (max-width: 700px){
  font-size: 1.3em
}
margin-top:0.67em;
font-weight: bold
`;




  if ( wert && wertzwei && IndexOfInputfieldstring3 && IndexOfInputfieldstring4 && IndexOfInputfieldstring5 && IndexOfInputfieldstring6 && IndexOfInputfieldstring7 >= 0 && renderchart8 === true && renderchart9 === true &&renderchart10 === true) {
  return (
    <>
    <p/>
    <h1><Headline textcolor="yellowgreen">STRU</Headline><Headline textcolor="tomato">CTOG</Headline><Headline textcolor="rgb(0, 159, 225)">RAM®</Headline></h1>
    <p/>
    <div style={Item11}>
      Das Structogram dient zur Persönlichkeitsanalyse.
      <p />
      Um den Test erfolgreich durchzuführen, müssen folgende Regeln eingehalten werden: 
      <ol>
        <li>Lies die Aufgabe</li>
        <li>Lies die Beschreibung zur Durchführung</li>
        <li>Fülle die Felder wie in der Beschreibung angegeben aus</li>
      </ol>
      <h3>Achtung!!!
        <p/>
        Füllst Du die Felder nicht wie beschrieben aus, wird dich ein Text am Ende des Tests darauf hinweisen. Dieser wird nicht nett sein!
        <p/>
        Jede weitere Einleitung kommt durch Femki <span style={{color:"red"}}>♥</span>
      </h3>
    </div>
    <div style={Item12}>
    Frage 1:
    </div>
    <div style={Container1}>
      <div style = {Item1}>
          <div>{fragen[0]}</div>
          <p />
          <div style={{font: "italic"}}>{fragenZusatz[0]}</div>
          <p/>
          <br/>
          <br/>
          <br/>
          {handlungsbeschreibung11}
          <p/>
          {handlungsbeschreibung12}
          <p/>
          {handlungsbeschreibung13}
          <p/>
          {handlungsbeschreibung14}
      </div>    
      <div className="Item3">  
      <div style={{display: "flex",
            alignItems: "center",
            border: "solid silver 2px",
            backgroundColor: "grey",
            justifyContent: "space-around",
            marginBottom: "3px"}}>
      <div style={{display: "flex",
            alignItems: "center",
            margin: "5px",
      }}>{antwortenFrage1[0]}
      </div>
        <ObjectCalculator
        defaultValue=""
    onChange={event => setValue1(event.target.value)}/>
    <br/>
    <br/>
      </div>
      <div style={{display: "flex",
            alignItems: "center",
            border: "solid silver 2px",
            backgroundColor: "grey",
            justifyContent: "space-around",
            marginBottom: "3px"}}>
      <div style={{display: "flex",
            alignItems: "center",
            margin: "5px",
      }}>{antwortenFrage1[1]}
      </div>
      <ObjectCalculator
      defaultValue=""
      onChange={event => setValue2(event.target.value)}
      />
      </div>
      <div style={{display: "flex",
            alignItems: "center",
            border: "solid silver 2px",
            backgroundColor: "grey",
            justifyContent: "space-around",
            marginBottom: "3px"}}>
      <div style={{display: "flex",
            alignItems: "center",
            margin: "5px",
      }}>{antwortenFrage1[2]}
       
      </div>
      <ObjectCalculator
      defaultValue=""
      onChange={event => setValue3(event.target.value)}
      />
      </div>
      </div>
    </div>  
    <p />
    
    <div style={Item12}>
  Frage 2
  </div>
     <div style={Container1}>
      <div style = {Item1}> 
        <div>{fragen[1]}
        <p />
          <div style={{font: "italic"}}>{fragenZusatz[1]}</div>
        </div>
      </div> 
      <div className="Item3"> 
      <div style={{display: "flex",
            alignItems: "center",
            border: "solid silver 2px",
            backgroundColor: "grey",
            justifyContent: "space-around",
            marginBottom: "3px"}}>
      <div style={{display: "flex",
            alignItems: "center",
            margin: "5px",
      }}>{antwortenFrage2[0]}
      </div>
       
        <ObjectCalculator
      value={value4} 
      maxLength="1" 
      onChange={event => setValue4(event.target.value)}
      />
      </div>
      <div style={{display: "flex",
            alignItems: "center",
            border: "solid silver 2px",
            backgroundColor: "grey",
            justifyContent: "space-around",
            marginBottom: "3px"}}>
      <div style={{display: "flex",
            alignItems: "center",
            margin: "5px",
      }}>{antwortenFrage2[1]}
      </div>
      <ObjectCalculator
      value={value5} 
      maxLength="1" 
      onChange={event => setValue5(event.target.value)}
      />
      </div>      
      <div style={{display: "flex",
            alignItems: "center",
            border: "solid silver 2px",
            backgroundColor: "grey",
            justifyContent: "space-around",
            marginBottom: "3px"}}>
      <div style={{display: "flex",
            alignItems: "center",
            margin: "5px",
      }}>{antwortenFrage2[2]}
      </div>
      <ObjectCalculator
      value={value6} 
      maxLength="1" 
      onChange={event => setValue6(event.target.value)}
      />
      </div>
      </div>
     </div>   
    <p />
    <div style={Item12}>
      Frage 3
    </div>  
     <div style={Container1}>
      <div style = {Item1}>  
        <div>{fragen[2]}
        <p />
          <div style={{font: "italic"}}>{fragenZusatz[2]}</div>
        </div>
      </div>    
      <div className="Item3">  
      <div style={{display: "flex",
            alignItems: "center",
            border: "solid silver 2px",
            backgroundColor: "grey",
            justifyContent: "space-around",
            marginBottom: "3px"}}>
      <div style={{display: "flex",
            alignItems: "center",
            margin: "5px",
      }}>{antwortenFrage3[0]}
      </div>
        <ObjectCalculator
      value={value7} 
      maxLength="1" 
      onChange={event => setValue7(event.target.value)}
      />
      </div>
      <div style={{display: "flex",
            alignItems: "center",
            border: "solid silver 2px",
            backgroundColor: "grey",
            justifyContent: "space-around",
            marginBottom: "3px"}}>
      <div style={{display: "flex",
            alignItems: "center",
            margin: "5px",
      }}>{antwortenFrage3[1]}
      </div>
      <ObjectCalculator
      value={value8} 
      maxLength="1" 
      onChange={event => setValue8(event.target.value)}
      />
      </div>
      <div style={{display: "flex",
            alignItems: "center",
            border: "solid silver 2px",
            backgroundColor: "grey",
            justifyContent: "space-around",
            marginBottom: "3px"}}>
      <div style={{display: "flex",
            alignItems: "center",
            margin: "5px",
      }}>{antwortenFrage3[2]}
      </div>
      <ObjectCalculator
      value={value9} 
      maxLength="1" 
      onChange={event => setValue9(event.target.value)}
      />
      </div>
      </div>

     </div> 
     <div style={Item12}>
      Frage 4
    </div>  
     <div style={Container1}>
      <div style = {Item1}> 
        <div>{fragen[3]}
        <p />
          <div style={{font: "italic"}}>{fragenZusatz[3]}</div>
        </div>
      </div>    
      <div className="Item3">  
      <div style={{display: "flex",
            alignItems: "center",
            border: "solid silver 2px",
            backgroundColor: "grey",
            justifyContent: "space-around",
            marginBottom: "3px"}}>
      <div style={{display: "flex",
            alignItems: "center",
            margin: "5px",
      }}>{antwortenFrage4[0]}
      </div>
        <ObjectCalculator
      value={value10} 
      maxLength="1" 
      onChange={event => setValue10(event.target.value)}
      />
      </div>
            <div style={{display: "flex",
            alignItems: "center",
            border: "solid silver 2px",
            backgroundColor: "grey",
            justifyContent: "space-around",
            marginBottom: "3px"}}>
      <div style={{display: "flex",
            alignItems: "center",
            margin: "5px",
      }}>{antwortenFrage4[1]}
      </div>
      <ObjectCalculator
      value={value11} 
      maxLength="1" 
      onChange={event => setValue11(event.target.value)}
      />
      </div>
            <div style={{display: "flex",
            alignItems: "center",
            border: "solid silver 2px",
            backgroundColor: "grey",
            justifyContent: "space-around",
            marginBottom: "3px"}}>
      <div style={{display: "flex",
            alignItems: "center",
            margin: "5px",
      }}>{antwortenFrage4[2]}
      </div>
      <ObjectCalculator
      value={value12} 
      maxLength="1" 
      onChange={event => setValue12(event.target.value)}
      />
      </div>
      </div>

     </div> 
     <div style={Item12}>
      Frage 5
     </div> 
     <div style={Container1}>
      <div style = {Item1}> 
        <div>{fragen[4]}
        <p />
          <div style={{font: "italic"}}>{fragenZusatz[4]}</div>
        </div>
      </div>    
      <div className="Item3"> 
      <div style={{display: "flex",
            alignItems: "center",
            border: "solid silver 2px",
            backgroundColor: "grey",
            justifyContent: "space-around",
            marginBottom: "3px"}}>
      <div style={{display: "flex",
            alignItems: "center",
            margin: "5px",
      }}>{antwortenFrage5[0]}
      </div> 
        <ObjectCalculator
      value={value13} 
      maxLength="1" 
      onChange={event => setValue13(event.target.value)}
      />
      </div>
            <div style={{display: "flex",
            alignItems: "center",
            border: "solid silver 2px",
            backgroundColor: "grey",
            justifyContent: "space-around",
            marginBottom: "3px"}}>
      <div style={{display: "flex",
            alignItems: "center",
            margin: "5px",
      }}>{antwortenFrage5[1]}
      </div>
      <ObjectCalculator
      value={value14} 
      maxLength="1" 
      onChange={event => setValue14(event.target.value)}
      />
      </div>
            <div style={{display: "flex",
            alignItems: "center",
            border: "solid silver 2px",
            backgroundColor: "grey",
            justifyContent: "space-around",
            marginBottom: "3px"}}>
      <div style={{display: "flex",
            alignItems: "center",
            margin: "5px",
      }}>{antwortenFrage5[2]}
      </div>
      <ObjectCalculator
      value={value15} 
      maxLength="1" 
      onChange={event => setValue15(event.target.value)}
      />
      </div>
      </div>
     </div>   
     <div style={Item12}>
       Frage 6
     </div>  
     <div style={Container1}>
      <div style = {Item1}> 
        <div>{fragen[5]}
        <p />
          <div style={{font: "italic"}}>{fragenZusatz[5]}</div>
          </div>
      </div>    
      <div className="Item3"> 
      <div style={{display: "flex",
            alignItems: "center",
            border: "solid silver 2px",
            backgroundColor: "grey",
            justifyContent: "space-around",
            marginBottom: "3px"}}>
      <div style={{display: "flex",
            alignItems: "center",
            margin: "5px",
      }}>{antwortenFrage6[0]}
      </div> 
        <ObjectCalculator
      value={value16} 
      maxLength="1" 
      onChange={event => setValue16(event.target.value)}
      />
      </div>
            <div style={{display: "flex",
            alignItems: "center",
            border: "solid silver 2px",
            backgroundColor: "grey",
            justifyContent: "space-around",
            marginBottom: "3px"}}>
      <div style={{display: "flex",
            alignItems: "center",
            margin: "5px",
      }}>{antwortenFrage6[1]}
      </div>
      <ObjectCalculator
      value={value17} 
      maxLength="1" 
      onChange={event => setValue17(event.target.value)}
      />
      </div>
            <div style={{display: "flex",
            alignItems: "center",
            border: "solid silver 2px",
            backgroundColor: "grey",
            justifyContent: "space-around",
            marginBottom: "3px"}}>
      <div style={{display: "flex",
            alignItems: "center",
            margin: "5px",
      }}>{antwortenFrage6[2]}
      </div>
      <ObjectCalculator
      value={value18} 
      maxLength="1" 
      onChange={event => setValue18(event.target.value)}
      />
      </div>
      </div>
     </div> 
     <div style={Item12}>
      Frage 7
     </div>
     <div style={Container1}>
      <div style = {Item1}> 
        <div>{fragen[6]}
        <p />
          <div style={{font: "italic"}}>{fragenZusatz[6]}</div>
          </div>
      </div>    
      <div className="Item3">  
      <div style={{display: "flex",
            alignItems: "center",
            border: "solid silver 2px",
            backgroundColor: "grey",
            justifyContent: "space-around",
            marginBottom: "3px"}}>
      <div style={{display: "flex",
            alignItems: "center",
            margin: "5px",
      }}>{antwortenFrage7[0]}
      </div>
        <ObjectCalculator
      value={value19} 
      maxLength="1" 
      onChange={event => setValue19(event.target.value)}
      />
      </div>
            <div style={{display: "flex",
            alignItems: "center",
            border: "solid silver 2px",
            backgroundColor: "grey",
            justifyContent: "space-around",
            marginBottom: "3px"}}>
      <div style={{display: "flex",
            alignItems: "center",
            margin: "5px",
      }}>{antwortenFrage7[1]}
      </div>
      <ObjectCalculator
      value={value20} 
      maxLength="1" 
      onChange={event => setValue20(event.target.value)}
      />
      </div>
            <div style={{display: "flex",
            alignItems: "center",
            border: "solid silver 2px",
            backgroundColor: "grey",
            justifyContent: "space-around",
            marginBottom: "3px"}}>
      <div style={{display: "flex",
            alignItems: "center",
            margin: "5px",
      }}>{antwortenFrage7[2]}
      </div>
      <ObjectCalculator
      value={value21} 
      maxLength="1" 
      onChange={event => setValue21(event.target.value)}
      />
      </div>
      </div>
     </div> 
     <div style={Item12}>
     <p>Frage 8</p>
     
     {handlungsbeschreibung2}
     </div>
     <div style={Container1}>
       <div style = {Item1}>
        <div>{fragen[7]}
        <p />
          <div style={{font: "italic"}}>{fragenZusatz[7]}</div>
        </div>
      </div>  
      <div style={Item2}>
        <TableRowQ8to10>
          <QuestionColumn>
            {antwortenFrage8[0]}
          </QuestionColumn>
         <Checkbox checked={checked22} setChecked={setChecked22} inputfieldvalue={inputfieldvalue22} />
        </TableRowQ8to10>
        <TableRowQ8to10>
          <QuestionColumn>
            {antwortenFrage8[1]}
          </QuestionColumn>
         <Checkbox checked={checked23} setChecked={setChecked23} inputfieldvalue={inputfieldvalue23} />
        </TableRowQ8to10>
        <TableRowQ8to10>
          <QuestionColumn>
            {antwortenFrage8[2]}
          </QuestionColumn>
         <Checkbox checked={checked24} setChecked={setChecked24} inputfieldvalue={inputfieldvalue24} />
        </TableRowQ8to10>
        <TableRowQ8to10>
          <QuestionColumn>
            {antwortenFrage8[3]}
          </QuestionColumn>
         <Checkbox checked={checked25} setChecked={setChecked25} inputfieldvalue={inputfieldvalue25} />
        </TableRowQ8to10>
        <TableRowQ8to10>
          <QuestionColumn>
            {antwortenFrage8[4]}
          </QuestionColumn>
         <Checkbox checked={checked26} setChecked={setChecked26} inputfieldvalue={inputfieldvalue26} />
        </TableRowQ8to10>
        <TableRowQ8to10>
          <QuestionColumn>
            {antwortenFrage8[5]}
          </QuestionColumn>
         <Checkbox checked={checked27} setChecked={setChecked27} inputfieldvalue={inputfieldvalue27} />
        </TableRowQ8to10>      
    </div>
    </div>
    <p style={Item12}>Frage 9</p>
     <div style={Container1}>
       <div style = {Item1}>
        <div>{fragen[8]}
        <p />
          <div style={{font: "italic"}}>{fragenZusatz[8]}</div>
        </div>
      </div>  
      <div style={Item2}>
        <TableRowQ8to10>
          <QuestionColumn>
            {antwortenFrage9[0]}
          </QuestionColumn>
         <Checkbox checked={checked28} setChecked={setChecked28} inputfieldvalue={inputfieldvalue28} />
        </TableRowQ8to10> 
        <TableRowQ8to10>
          <QuestionColumn>
            {antwortenFrage9[1]}
          </QuestionColumn>
         <Checkbox checked={checked29} setChecked={setChecked29} inputfieldvalue={inputfieldvalue29} />
        </TableRowQ8to10> 
        <TableRowQ8to10>
          <QuestionColumn>
            {antwortenFrage9[2]}
          </QuestionColumn>
         <Checkbox checked={checked30} setChecked={setChecked30} inputfieldvalue={inputfieldvalue30} />
        </TableRowQ8to10> 
        <TableRowQ8to10>
          <QuestionColumn>
            {antwortenFrage9[3]}
          </QuestionColumn>
         <Checkbox checked={checked31} setChecked={setChecked31} inputfieldvalue={inputfieldvalue31} />
        </TableRowQ8to10> 
        <TableRowQ8to10>
          <QuestionColumn>
            {antwortenFrage9[4]}
          </QuestionColumn>
         <Checkbox checked={checked32} setChecked={setChecked32} inputfieldvalue={inputfieldvalue32} />
        </TableRowQ8to10> 
        <TableRowQ8to10>
          <QuestionColumn>
            {antwortenFrage9[5]}
          </QuestionColumn>
         <Checkbox checked={checked33} setChecked={setChecked33} inputfieldvalue={inputfieldvalue33} />
        </TableRowQ8to10> 
      </div>
    </div>
  
    <p style={Item12}>Frage 10</p>
     <div style={Container1}>
       <div style = {Item1}>
        <div>{fragen[9]}
        <p />
          <div style={{font: "italic"}}>{fragenZusatz[9]}</div>
        </div>
      </div>  
      <div style={Item2}>
        <TableRowQ8to10>
          <QuestionColumn>
            {antwortenFrage10[0]}
          </QuestionColumn>
         <Checkbox checked={checked34} setChecked={setChecked34} inputfieldvalue={inputfieldvalue34} />
        </TableRowQ8to10> 
        <TableRowQ8to10>
          <QuestionColumn>
            {antwortenFrage10[1]}
          </QuestionColumn>
         <Checkbox checked={checked35} setChecked={setChecked35} inputfieldvalue={inputfieldvalue35} />
        </TableRowQ8to10> 
        <TableRowQ8to10>
          <QuestionColumn>
            {antwortenFrage10[2]}
          </QuestionColumn>
         <Checkbox checked={checked36} setChecked={setChecked36} inputfieldvalue={inputfieldvalue36} />
        </TableRowQ8to10> 
        <TableRowQ8to10>
          <QuestionColumn>
            {antwortenFrage10[3]}
          </QuestionColumn>
         <Checkbox checked={checked37} setChecked={setChecked37} inputfieldvalue={inputfieldvalue37} />
        </TableRowQ8to10> 
        <TableRowQ8to10>
        <QuestionColumn>
          {antwortenFrage10[4]}
        </QuestionColumn>
       <Checkbox checked={checked38} setChecked={setChecked38} inputfieldvalue={inputfieldvalue38} />
      </TableRowQ8to10> 
      <TableRowQ8to10>
          <QuestionColumn>
            {antwortenFrage10[5]}
          </QuestionColumn>
         <Checkbox checked={checked39} setChecked={setChecked39} inputfieldvalue={inputfieldvalue39} />
        </TableRowQ8to10> 
      </div> 
     </div> 
  <p style={roteErgebnisse}>{ergebnisRot} Das ist die Summer der roten
  Ergebnisse</p>
  <p style={grueneErgebnisse}>{ergebnisGruen} Das ist die Summer der grünen
  Ergebnisse</p>
  <br/>
  <br/>
  <h3 style={Item12}>Dies ist Dein persönliches Structogram Ergebnis</h3>
  <PieChart iVR={ergebnisRot} iGR={ergebnisGruen}/>
  <br/>
  <br/>
  <span style={Credits}> Credits @ webdevelukas && pdxphilippmac && j-toscani </span>
  </>
  );
  }
  return (
    <>
    <p/>
    <h1><Headline textcolor="yellowgreen">STRU</Headline><Headline textcolor="tomato">CTOG</Headline><Headline textcolor="rgb(0, 159, 225)">RAM®</Headline></h1>
    <p/>
    <div style={Item11}>
      Das Structogram dient zur Persönlichkeitsanalyse.
      <p />
      Um den Test erfolgreich durchzuführen, müssen folgende Regeln eingehalten werden: 
      <ol>
        <li>Lies die Aufgabe</li>
        <li>Lies die Beschreibung zur Durchführung</li>
        <li>Fülle die Felder laut Beschreibung aus</li>
      </ol>
      <h3>Achtung!!!
        <p/>
        Füllst Du die Felder nicht wie beschrieben aus, wird dich ein Text am Ende des Tests darauf hinweisen. Dieser wird nicht nett sein!
        <p/>
        Jede weitere Einleitung kommt durch Femki <span style={{color:"red"}}>♥</span>
      </h3>
    </div>
    <div style={Item12}>
    Frage 1:
    </div>
    <div style={Container1}>
      <div style = {Item1}>
          <div>{fragen[0]}</div>
          <p />
          <div style={{font: "italic"}}>{fragenZusatz[0]}</div>
          <p/>
          <br/>
          <br/>
          <br/>
          {handlungsbeschreibung11}
          <p/>
          {handlungsbeschreibung12}
          <p/>
          {handlungsbeschreibung13}
          <p/>
          {handlungsbeschreibung14}
      </div>    
      <div className="Item3">  
      <div style={{display: "flex",
            alignItems: "center",
            border: "solid silver 2px",
            backgroundColor: "grey",
            justifyContent: "space-around",
            marginBottom: "3px"}}>
      <div style={{display: "flex",
            alignItems: "center",
            margin: "5px",
      }}>{antwortenFrage1[0]}
      </div>
        <ObjectCalculator
        defaultValue=""
    onChange={event => setValue1(event.target.value)}/>
    <br/>
    <br/>
      </div>
      <div style={{display: "flex",
            alignItems: "center",
            border: "solid silver 2px",
            backgroundColor: "grey",
            justifyContent: "space-around",
            marginBottom: "3px"}}>
      <div style={{display: "flex",
            alignItems: "center",
            margin: "5px",
      }}>{antwortenFrage1[1]}
      </div>
      <ObjectCalculator
      defaultValue=""
      onChange={event => setValue2(event.target.value)}
      />
      </div>
      <div style={{display: "flex",
            alignItems: "center",
            border: "solid silver 2px",
            backgroundColor: "grey",
            justifyContent: "space-around",
            marginBottom: "3px"}}>
      <div style={{display: "flex",
            alignItems: "center",
            margin: "5px",
      }}>{antwortenFrage1[2]}
       
      </div>
      <ObjectCalculator
      defaultValue=""
      onChange={event => setValue3(event.target.value)}
      />
      </div>
      </div>
    </div>  
    <p />
    
    <div style={Item12}>
  Frage 2
  </div>
     <div style={Container1}>
      <div style = {Item1}> 
        <div>{fragen[1]}
        <p />
          <div style={{font: "italic"}}>{fragenZusatz[1]}</div>
        </div>
      </div> 
      <div className="Item3"> 
      <div style={{display: "flex",
            alignItems: "center",
            border: "solid silver 2px",
            backgroundColor: "grey",
            justifyContent: "space-around",
            marginBottom: "3px"}}>
      <div style={{display: "flex",
            alignItems: "center",
            margin: "5px",
      }}>{antwortenFrage2[0]}
      </div>
       
        <ObjectCalculator
      value={value4} 
      maxLength="1" 
      onChange={event => setValue4(event.target.value)}
      />
      </div>
      <div style={{display: "flex",
            alignItems: "center",
            border: "solid silver 2px",
            backgroundColor: "grey",
            justifyContent: "space-around",
            marginBottom: "3px"}}>
      <div style={{display: "flex",
            alignItems: "center",
            margin: "5px",
      }}>{antwortenFrage2[1]}
      </div>
      <ObjectCalculator
      value={value5} 
      maxLength="1" 
      onChange={event => setValue5(event.target.value)}
      />
      </div>      
      <div style={{display: "flex",
            alignItems: "center",
            border: "solid silver 2px",
            backgroundColor: "grey",
            justifyContent: "space-around",
            marginBottom: "3px"}}>
      <div style={{display: "flex",
            alignItems: "center",
            margin: "5px",
      }}>{antwortenFrage2[2]}
      </div>
      <ObjectCalculator
      value={value6} 
      maxLength="1" 
      onChange={event => setValue6(event.target.value)}
      />
      </div>
      </div>
     </div>   
    <p />
    <div style={Item12}>
      Frage 3
    </div>  
     <div style={Container1}>
      <div style = {Item1}>  
        <div>{fragen[2]}
        <p />
          <div style={{font: "italic"}}>{fragenZusatz[2]}</div>
        </div>
      </div>    
      <div className="Item3">  
      <div style={{display: "flex",
            alignItems: "center",
            border: "solid silver 2px",
            backgroundColor: "grey",
            justifyContent: "space-around",
            marginBottom: "3px"}}>
      <div style={{display: "flex",
            alignItems: "center",
            margin: "5px",
      }}>{antwortenFrage3[0]}
      </div>
        <ObjectCalculator
      value={value7} 
      maxLength="1" 
      onChange={event => setValue7(event.target.value)}
      />
      </div>
      <div style={{display: "flex",
            alignItems: "center",
            border: "solid silver 2px",
            backgroundColor: "grey",
            justifyContent: "space-around",
            marginBottom: "3px"}}>
      <div style={{display: "flex",
            alignItems: "center",
            margin: "5px",
      }}>{antwortenFrage3[1]}
      </div>
      <ObjectCalculator
      value={value8} 
      maxLength="1" 
      onChange={event => setValue8(event.target.value)}
      />
      </div>
      <div style={{display: "flex",
            alignItems: "center",
            border: "solid silver 2px",
            backgroundColor: "grey",
            justifyContent: "space-around",
            marginBottom: "3px"}}>
      <div style={{display: "flex",
            alignItems: "center",
            margin: "5px",
      }}>{antwortenFrage3[2]}
      </div>
      <ObjectCalculator
      value={value9} 
      maxLength="1" 
      onChange={event => setValue9(event.target.value)}
      />
      </div>
      </div>

     </div> 
     <div style={Item12}>
      Frage 4
    </div>  
     <div style={Container1}>
      <div style = {Item1}> 
        <div>{fragen[3]}
        <p />
          <div style={{font: "italic"}}>{fragenZusatz[3]}</div>
        </div>
      </div>    
      <div className="Item3">  
      <div style={{display: "flex",
            alignItems: "center",
            border: "solid silver 2px",
            backgroundColor: "grey",
            justifyContent: "space-around",
            marginBottom: "3px"}}>
      <div style={{display: "flex",
            alignItems: "center",
            margin: "5px",
      }}>{antwortenFrage4[0]}
      </div>
        <ObjectCalculator
      value={value10} 
      maxLength="1" 
      onChange={event => setValue10(event.target.value)}
      />
      </div>
            <div style={{display: "flex",
            alignItems: "center",
            border: "solid silver 2px",
            backgroundColor: "grey",
            justifyContent: "space-around",
            marginBottom: "3px"}}>
      <div style={{display: "flex",
            alignItems: "center",
            margin: "5px",
      }}>{antwortenFrage4[1]}
      </div>
      <ObjectCalculator
      value={value11} 
      maxLength="1" 
      onChange={event => setValue11(event.target.value)}
      />
      </div>
            <div style={{display: "flex",
            alignItems: "center",
            border: "solid silver 2px",
            backgroundColor: "grey",
            justifyContent: "space-around",
            marginBottom: "3px"}}>
      <div style={{display: "flex",
            alignItems: "center",
            margin: "5px",
      }}>{antwortenFrage4[2]}
      </div>
      <ObjectCalculator
      value={value12} 
      maxLength="1" 
      onChange={event => setValue12(event.target.value)}
      />
      </div>
      </div>

     </div> 
     <div style={Item12}>
      Frage 5
     </div> 
     <div style={Container1}>
      <div style = {Item1}> 
        <div>{fragen[4]}
        <p />
          <div style={{font: "italic"}}>{fragenZusatz[4]}</div>
        </div>
      </div>    
      <div className="Item3"> 
      <div style={{display: "flex",
            alignItems: "center",
            border: "solid silver 2px",
            backgroundColor: "grey",
            justifyContent: "space-around",
            marginBottom: "3px"}}>
      <div style={{display: "flex",
            alignItems: "center",
            margin: "5px",
      }}>{antwortenFrage5[0]}
      </div> 
        <ObjectCalculator
      value={value13} 
      maxLength="1" 
      onChange={event => setValue13(event.target.value)}
      />
      </div>
            <div style={{display: "flex",
            alignItems: "center",
            border: "solid silver 2px",
            backgroundColor: "grey",
            justifyContent: "space-around",
            marginBottom: "3px"}}>
      <div style={{display: "flex",
            alignItems: "center",
            margin: "5px",
      }}>{antwortenFrage5[1]}
      </div>
      <ObjectCalculator
      value={value14} 
      maxLength="1" 
      onChange={event => setValue14(event.target.value)}
      />
      </div>
            <div style={{display: "flex",
            alignItems: "center",
            border: "solid silver 2px",
            backgroundColor: "grey",
            justifyContent: "space-around",
            marginBottom: "3px"}}>
      <div style={{display: "flex",
            alignItems: "center",
            margin: "5px",
      }}>{antwortenFrage5[2]}
      </div>
      <ObjectCalculator
      value={value15} 
      maxLength="1" 
      onChange={event => setValue15(event.target.value)}
      />
      </div>
      </div>
     </div>   
     <div style={Item12}>
       Frage 6
     </div>  
     <div style={Container1}>
      <div style = {Item1}> 
        <div>{fragen[5]}
        <p />
          <div style={{font: "italic"}}>{fragenZusatz[5]}</div>
          </div>
      </div>    
      <div className="Item3"> 
      <div style={{display: "flex",
            alignItems: "center",
            border: "solid silver 2px",
            backgroundColor: "grey",
            justifyContent: "space-around",
            marginBottom: "3px"}}>
      <div style={{display: "flex",
            alignItems: "center",
            margin: "5px",
      }}>{antwortenFrage6[0]}
      </div> 
        <ObjectCalculator
      value={value16} 
      maxLength="1" 
      onChange={event => setValue16(event.target.value)}
      />
      </div>
            <div style={{display: "flex",
            alignItems: "center",
            border: "solid silver 2px",
            backgroundColor: "grey",
            justifyContent: "space-around",
            marginBottom: "3px"}}>
      <div style={{display: "flex",
            alignItems: "center",
            margin: "5px",
      }}>{antwortenFrage6[1]}
      </div>
      <ObjectCalculator
      value={value17} 
      maxLength="1" 
      onChange={event => setValue17(event.target.value)}
      />
      </div>
            <div style={{display: "flex",
            alignItems: "center",
            border: "solid silver 2px",
            backgroundColor: "grey",
            justifyContent: "space-around",
            marginBottom: "3px"}}>
      <div style={{display: "flex",
            alignItems: "center",
            margin: "5px",
      }}>{antwortenFrage6[2]}
      </div>
      <ObjectCalculator
      value={value18} 
      maxLength="1" 
      onChange={event => setValue18(event.target.value)}
      />
      </div>
      </div>
     </div> 
     <div style={Item12}>
      Frage 7
     </div>
     <div style={Container1}>
      <div style = {Item1}> 
        <div>{fragen[6]}
        <p />
          <div style={{font: "italic"}}>{fragenZusatz[6]}</div>
          </div>
      </div>    
      <div className="Item3">  
      <div style={{display: "flex",
            alignItems: "center",
            border: "solid silver 2px",
            backgroundColor: "grey",
            justifyContent: "space-around",
            marginBottom: "3px"}}>
      <div style={{display: "flex",
            alignItems: "center",
            margin: "5px",
      }}>{antwortenFrage7[0]}
      </div>
        <ObjectCalculator
      value={value19} 
      maxLength="1" 
      onChange={event => setValue19(event.target.value)}
      />
      </div>
            <div style={{display: "flex",
            alignItems: "center",
            border: "solid silver 2px",
            backgroundColor: "grey",
            justifyContent: "space-around",
            marginBottom: "3px"}}>
      <div style={{display: "flex",
            alignItems: "center",
            margin: "5px",
      }}>{antwortenFrage7[1]}
      </div>
      <ObjectCalculator
      value={value20} 
      maxLength="1" 
      onChange={event => setValue20(event.target.value)}
      />
      </div>
            <div style={{display: "flex",
            alignItems: "center",
            border: "solid silver 2px",
            backgroundColor: "grey",
            justifyContent: "space-around",
            marginBottom: "3px"}}>
      <div style={{display: "flex",
            alignItems: "center",
            margin: "5px",
      }}>{antwortenFrage7[2]}
      </div>
      <ObjectCalculator
      value={value21} 
      maxLength="1" 
      onChange={event => setValue21(event.target.value)}
      />
      </div>
      </div>
     </div> 
     <div style={Item12}>
     <p>Frage 8</p>
     
     {handlungsbeschreibung2}
     </div>
     <div style={Container1}>
       <div style = {Item1}>
        <div>{fragen[7]}
        <p />
          <div style={{font: "italic"}}>{fragenZusatz[7]}</div>
        </div>
      </div>  
      <div style={Item2}>
        <TableRowQ8to10>
          <QuestionColumn>
            {antwortenFrage8[0]}
          </QuestionColumn>
         <Checkbox checked={checked22} setChecked={setChecked22} inputfieldvalue={inputfieldvalue22} />
        </TableRowQ8to10>
        <TableRowQ8to10>
          <QuestionColumn>
            {antwortenFrage8[1]}
          </QuestionColumn>
         <Checkbox checked={checked23} setChecked={setChecked23} inputfieldvalue={inputfieldvalue23} />
        </TableRowQ8to10>
        <TableRowQ8to10>
          <QuestionColumn>
            {antwortenFrage8[2]}
          </QuestionColumn>
         <Checkbox checked={checked24} setChecked={setChecked24} inputfieldvalue={inputfieldvalue24} />
        </TableRowQ8to10>
        <TableRowQ8to10>
          <QuestionColumn>
            {antwortenFrage8[3]}
          </QuestionColumn>
         <Checkbox checked={checked25} setChecked={setChecked25} inputfieldvalue={inputfieldvalue25} />
        </TableRowQ8to10>
        <TableRowQ8to10>
          <QuestionColumn>
            {antwortenFrage8[4]}
          </QuestionColumn>
         <Checkbox checked={checked26} setChecked={setChecked26} inputfieldvalue={inputfieldvalue26} />
        </TableRowQ8to10>
        <TableRowQ8to10>
          <QuestionColumn>
            {antwortenFrage8[5]}
          </QuestionColumn>
         <Checkbox checked={checked27} setChecked={setChecked27} inputfieldvalue={inputfieldvalue27} />
        </TableRowQ8to10>      
    </div>
    </div>
    <p style={Item12}>Frage 9</p>
     <div style={Container1}>
       <div style = {Item1}>
        <div>{fragen[8]}
        <p />
          <div style={{font: "italic"}}>{fragenZusatz[8]}</div>
        </div>
      </div>  
      <div style={Item2}>
        <TableRowQ8to10>
          <QuestionColumn>
            {antwortenFrage9[0]}
          </QuestionColumn>
         <Checkbox checked={checked28} setChecked={setChecked28} inputfieldvalue={inputfieldvalue28} />
        </TableRowQ8to10> 
        <TableRowQ8to10>
          <QuestionColumn>
            {antwortenFrage9[1]}
          </QuestionColumn>
         <Checkbox checked={checked29} setChecked={setChecked29} inputfieldvalue={inputfieldvalue29} />
        </TableRowQ8to10> 
        <TableRowQ8to10>
          <QuestionColumn>
            {antwortenFrage9[2]}
          </QuestionColumn>
         <Checkbox checked={checked30} setChecked={setChecked30} inputfieldvalue={inputfieldvalue30} />
        </TableRowQ8to10> 
        <TableRowQ8to10>
          <QuestionColumn>
            {antwortenFrage9[3]}
          </QuestionColumn>
         <Checkbox checked={checked31} setChecked={setChecked31} inputfieldvalue={inputfieldvalue31} />
        </TableRowQ8to10> 
        <TableRowQ8to10>
          <QuestionColumn>
            {antwortenFrage9[4]}
          </QuestionColumn>
         <Checkbox checked={checked32} setChecked={setChecked32} inputfieldvalue={inputfieldvalue32} />
        </TableRowQ8to10> 
        <TableRowQ8to10>
          <QuestionColumn>
            {antwortenFrage9[5]}
          </QuestionColumn>
         <Checkbox checked={checked33} setChecked={setChecked33} inputfieldvalue={inputfieldvalue33} />
        </TableRowQ8to10> 
      </div>
    </div>
  
    <p style={Item12}>Frage 10</p>
     <div style={Container1}>
       <div style = {Item1}>
        <div>{fragen[9]}
        <p />
          <div style={{font: "italic"}}>{fragenZusatz[9]}</div>
        </div>
      </div>  
      <div style={Item2}>
        <TableRowQ8to10>
          <QuestionColumn>
            {antwortenFrage10[0]}
          </QuestionColumn>
         <Checkbox checked={checked34} setChecked={setChecked34} inputfieldvalue={inputfieldvalue34} />
        </TableRowQ8to10> 
        <TableRowQ8to10>
          <QuestionColumn>
            {antwortenFrage10[1]}
          </QuestionColumn>
         <Checkbox checked={checked35} setChecked={setChecked35} inputfieldvalue={inputfieldvalue35} />
        </TableRowQ8to10> 
        <TableRowQ8to10>
          <QuestionColumn>
            {antwortenFrage10[2]}
          </QuestionColumn>
         <Checkbox checked={checked36} setChecked={setChecked36} inputfieldvalue={inputfieldvalue36} />
        </TableRowQ8to10> 
        <TableRowQ8to10>
          <QuestionColumn>
            {antwortenFrage10[3]}
          </QuestionColumn>
         <Checkbox checked={checked37} setChecked={setChecked37} inputfieldvalue={inputfieldvalue37} />
        </TableRowQ8to10> 
        <TableRowQ8to10>
        <QuestionColumn>
          {antwortenFrage10[4]}
        </QuestionColumn>
       <Checkbox checked={checked38} setChecked={setChecked38} inputfieldvalue={inputfieldvalue38} />
      </TableRowQ8to10> 
      <TableRowQ8to10>
          <QuestionColumn>
            {antwortenFrage10[5]}
          </QuestionColumn>
         <Checkbox checked={checked39} setChecked={setChecked39} inputfieldvalue={inputfieldvalue39} />
        </TableRowQ8to10> 
      </div> 
     </div> 
    <p style={roteErgebnisse}>{ergebnisRot} Das ist die Summer der roten
    Ergebnisse</p>
    <p style={grueneErgebnisse}>{ergebnisGruen} Das ist die Summer der grünen
    Ergebnisse</p>
    <h2 style={Item2}>Irgendwo sind falsche Werte du Dummkopf!</h2>
    <p />
    <h3 style={Item2}>HALTE DICH AN DIE ANGABEN!!!</h3>
    <p />
    <span style={Credits}> Credits @ webdevelukas && pdxphilippmac && j-toscani </span>
    </>
    );
  }
  

/*
const [value1, setValue1] = React.useState("");



return (
  <>
    <select defaultValue=""
    onChange={event => setValue1(event.target.value)}>
      <option value=""></option>
      <option value="0">0</option>
      <option value="+">+</option>
      <option value="-">-</option>
    </select>
    <br/>
    <br/>
    {value1}
  </>
)
*/
