import React, { useState } from "react";
import { antwortenF1 } from "../api/Data.js";
import { antwortenF2 } from "../api/Data.js";
import { antwortenF3 } from "../api/Data.js";
import { antwortenF4 } from "../api/Data.js";
import { antwortenF5 } from "../api/Data.js";
import { antwortenF6 } from "../api/Data.js";
import { antwortenF7 } from "../api/Data.js";
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


  const ergebnisRot= Frage1wertRot + Frage2wertRot + Frage3WertRot + Frage4WertRot + Frage5WertRot + Frage6WertRot + Frage7WertRot
  const ergebnisGruen = Frage1wertGruen + Frage2WertGruen + Frage3WertGruen + Frage4WertGruen + Frage5WertGruen + Frage6WertGruen + Frage7WertGruen
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
  

