import React, { useState } from "react";
import CalculateFormAra65 from './Components/CalculateFormAra65/CalculateFormAra65';

function App() {

  const [equation, setEquation] = useState({});

  function updateEquation(e){
    setEquation({
      ...equation,
      [e.target.id] : [e.target.value]
    })
  }

  function doOperation(){
    switch(equation.operation){
      case "add":
        //Do add thing
        console.log("Result: " + 
        (parseFloat(equation.operand1) + parseFloat(equation.operand2)));
        break;
        default:
          console.log("Sorry we dont do that here...");
    }
  }

  return (
    <div className="App">
      <h1>Calculate app</h1>
      <CalculateFormAra65></CalculateFormAra65>
    </div>
  );
}

export default App;
