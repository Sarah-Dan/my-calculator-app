import React, { useState } from "react";

// create a calculator component
const Calculator = () => {
  // Declare a new state variable
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const operators = ["+", "-", "x", "/", "."];

  const updateCalc = (value) => {
    if (
      (operators.includes(value) && calc === "") ||
      (operators.includes(value) && operators.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);

    if (!operators.includes(value)) {
      // Evaluate the expression
      setResult(eval(calc + value).toString());
    }
  };

  // create number buttons
  const createNumbers = () => {
    const numbers = [];
    for (let i = 1; i < 10; i++) {
      numbers.push(
        <button
          onClick={() => updateCalc(i.toString())}
          className="number"
          key={i}
          value={i}
        >
          {i}
        </button>
      );
    }
    return numbers;
  };

  // Calculate the result
  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  // Delete the last input
  const clear = () => {
    if (calc === "") {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  };

  // Clear all the calculator output
  const clearAll = () => {
    setCalc("");
    setResult("");
  };

  return (
    <div className="calculator">
      {/* display the calculator output */}
      <div className="calculator__display">
        {result ? <span>({result})</span> : ""}
        {calc || "0"}
      </div>
      {/* calculator operators */}
      <div className="operators">
        <button className="operator" onClick={() => updateCalc("+")}>
          +
        </button>
        <button className="operator" onClick={() => updateCalc("-")}>
          -
        </button>
        <button className="operator" onClick={() => updateCalc("*")}>
          x
        </button>
        <button className="operator" onClick={() => updateCalc("/")}>
          /
        </button>
        <button className="operator" onClick={clear}>
          DEL
        </button>
        <button className="operator" onClick={clearAll}>
          CLEAR
        </button>
      </div>
      {/* calculator numbers */}
      <div className="numbers">
        {createNumbers()}
        <button className="number" onClick={() => updateCalc(".")}>
          .
        </button>
        <button className="number" onClick={() => updateCalc("0")}>
          0
        </button>
        <button id="equal__sign" className="number" onClick={calculate}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
