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

  // Clear the calculator output
  const clear = () => {
    setCalc("");
    setResult("");
  };

  return (
    <div className="calculator">
      <div className="calculator__display">
        {result ? <span>({result})</span> : ""}
        {calc || "0"}
      </div>

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
          C
        </button>
      </div>
      <div className="numbers">
        {createNumbers()}
        <button className="number" onClick={() => updateCalc(".")}>
          .
        </button>
        <button className="number" onClick={() => updateCalc("0")}>
          0
        </button>
        <button className="operator" onClick={calculate}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
