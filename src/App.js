import React, { useEffect, useState } from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

import "./App.css";

function App() {
  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    const won = dice.every(
      (currentDice) =>
        currentDice.isHeld && dice[0].number === currentDice.number
    );
    if (won) {
      console.log("you won!");
      setTenzies(true);
    }
  }, [dice]);

  function generateNewDie() {
    return {
      number: Math.floor(Math.random() * 6) + 1,
      isHeld: false,
      id: nanoid(),
    };
  }

  function allNewDice() {
    const randomNumbers = [];
    for (let i = 0; i < 10; i++) {
      randomNumbers.push(generateNewDie());
    }
    return randomNumbers;
  }

  function rollDice() {
    if (tenzies) {
      setTenzies(false);
      return setDice(allNewDice());
    }
    setDice((prevValue) => {
      return prevValue.map((dice) => (dice.isHeld ? dice : generateNewDie()));
    });
  }

  function toggleHeldOn(diceId) {
    setDice((prevDices) => {
      return prevDices.map((dice) =>
        dice.id === diceId ? { ...dice, isHeld: !dice.isHeld } : dice
      );
    });
  }

  return (
    <main>
      {tenzies && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice-container">
        {dice.map((dice) => (
          <Die key={dice.id} dice={dice} toggleHeldOn={toggleHeldOn} />
        ))}
      </div>
      <button className="roll-dice" onClick={rollDice}>
        {tenzies ? "New Game" : "Roll"}
      </button>
    </main>
  );
}

export default App;
