import React, { useState } from "react";

const Calculatrice = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  return (
    <div className="App">
      <h1>Calculatrice</h1>
      <div className="input-container">
        <input
          type="text"
          value={expression}
          onChange={(e) => setExpression(e.target.value)}
        />
      </div>
      <div className="buttons-container">
        <button onClick={() => setExpression(expression + "0")}>0</button>
        <button onClick={() => setExpression(expression + "1")}>1</button>
        <button onClick={() => setExpression(expression + "2")}>2</button>
        <button onClick={() => setExpression(expression + "3")}>3</button>
        <button onClick={() => setExpression(expression + "4")}>4</button>
        <button onClick={() => setExpression(expression + "5")}>5</button>
        <button onClick={() => setExpression(expression + "6")}>6</button>
        <button onClick={() => setExpression(expression + "7")}>7</button>
        <button onClick={() => setExpression(expression + "8")}>8</button>
        <button onClick={() => setExpression(expression + "9")}>9</button>
        <button onClick={() => setExpression(expression + "+")}>+</button>
        <button onClick={() => setExpression(expression + "-")}>-</button>
        <button onClick={() => setExpression(expression + "*")}>*</button>
        <button onClick={() => setExpression(expression + "/")}>/</button>
        <button onClick={() => setResult(eval(expression))}>=</button>
        <button onClick={() => setExpression("")}>Effacer</button>
      </div>
      <div className="result-container">
        <p>{result}</p>
      </div>
    </div>
  );
};

export default App;