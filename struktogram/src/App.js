import React, { useState } from "react";
import { antwortenF1 } from "./api/Data.js";
import { antwortenF2 } from "&./api/Data.js";
import { fragen } from "./api/Data.js";
// import Counter from "./components/Counter";
import ObjectCalculator from "./components/ObjectCalculator";
import ObjectCalculator2 from "./components/ObjectCalculator2";
import './App.css';

function App() {
  const [posNum, setPosNum] = useState("");
  const [posNum2, setPosNum2] = useState("");
  const [posNum3, setPosNum3] = useState("");
  const [posNum4, setPosNum4] = useState("");
  const [posNum5, setPosNum5] = useState("");
  const [posNum7, setPosNum6] = useState("");
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
  //----------------Zweite Frage-----------------------------
  // Ein String wird erstellt um mit dem das Array verglichen werden kann
  
  const zweizwei = JSON.stringify(posNum4 + posNum5 + posNum7);
  console.log(zwei);
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
  console.log(wertMitDemIchRechnenKann);
  const Frage2wertRot =
  antwortenF2[wert2MitDemIchRechnenKann].WertRot;
  console.log(Frage1wertRot);
  const [ergebnisRot, setErgebnisRot] = useState("");
  function calculateTotal() {
  setErgebnisRot(Frage1wertRot + Frage2wertRot);
  }
  if ( wert && wertzwei > 0) {
  return (
  <>
  <div>{fragen[0]}</div>
  <ObjectCalculator
    posNum={posNum}
    setPosNum={setPosNum}
    posNum2={posNum2}
    setPosNum2={setPosNum2}
    posNum3={posNum3}
    setPosNum3={setPosNum3}
  />
  <p />
  <p />
   Nächste Frage
  <p />
  <div>{fragen[1]}</div>
    <ObjectCalculator2
      posNum4={posNum4} 
      setPosNum4={setPosNum4}
      posNum5={posNum5}
      setPosNum5={setPosNum5}
      posNum100={posNum7}
      setPosNum6={setPosNum6}
  />
  <p>{Frage1wertRot}</p>
  <p>{Frage2wertRot}</p>
          <button onClick={calculateTotal}>Click</button>
  <p>{ergebnisRot} Das ist die Summer der Roten
  Ergebnisse</p>
  </>
  );
  }
  return (
  <>
  <div>{fragen[0]}</div>
    <ObjectCalculator
      posNum={posNum}
      setPosNum={setPosNum}
      posNum2={posNum2}
      setPosNum2={setPosNum2}
      posNum3={posNum3}
      setPosNum3={setPosNum3}
  />
  <p />
    Nächste Frage
  <p />
  <div>{fragen[1]}</div>
    <ObjectCalculator2
      posNum4={posNum4}
      setPosNum4={setPosNum4}
      posNum5={posNum5}
      setPosNum5={setPosNum5}
      posNum100={posNum7}
      setPosNum6={setPosNum6}
  />
  <p>{Frage1wertRot}</p>
  <p>{Frage2wertRot}</p>
        <h1>Bitte richtige Werte einsetzen</h1>
  </>
  );
  }
  

export default App;


// Hier gehtts los


