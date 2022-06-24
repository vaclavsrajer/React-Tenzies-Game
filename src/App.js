import React, { useState } from "react";
import Die from "./components/Die";

import "./App.css";

function App() {
  const [dice, setDice] = useState(allNewDice());

  function allNewDice() {
    const randomNumbers = [];
    for (let i = 0; i < 10; i++) {
      randomNumbers.push({number: Math.floor(Math.random() * 6) + 1, isHeld: false});
    }
    return randomNumbers;
  }

  function rollDice() {
    setDice(() => allNewDice());
  }

  return (
    <main>
      <div className="dice-container">
        {dice.map((dice, index) => (
          <Die key={index} number={dice.number} />
        ))}
      </div>
      <button className="roll-dice" onClick={rollDice}> Roll</button>
    </main>
  );
}

export default App;
