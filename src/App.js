import React, { useState } from 'react';
import './App.css';
import * as math from 'mathjs';

function App() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      calculateResult();
    } else if (value === 'C') {
      clearExpression();
    } else {
      setExpression((prevExpression) => prevExpression + value);
    }
  };

  const calculateResult = () => {
    try {
      const evaluatedResult = math.evaluate(expression);
      setResult(evaluatedResult);
    } catch (error) {
      setResult('Error');
    }
  };

  const clearExpression = () => {
    setExpression('');
    setResult('');
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={expression} placeholder="Enter" disabled />
        <input type="text" value={result} placeholder="Result" disabled />
      </div>
      <div className="keypad">
        <button className="clear" onClick={() => handleClick('C')}>C</button>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button className="operator" onClick={() => handleClick('/')}>/</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button className="operator" onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button className="operator" onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button className="equal" onClick={() => handleClick('=')}>=</button>
        <button className="operator" onClick={() => handleClick('+')}>+</button>
      </div>
    </div>
  );
}

export default App;
