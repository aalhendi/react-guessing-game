import { useState } from "react";
import Settings from "./SettingsModal";
import { SettingsIcon, GuessBox } from "../styles";

const generateRandomNumber = (rangeMin, rangeMax) => {
  const min = Math.ceil(rangeMin);
  const max = Math.floor(rangeMax);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const Game = () => {
  const [startingLives, setStartingLives] = useState(5);
  const [lives, setLives] = useState(startingLives);
  const [userInput, setUserInput] = useState(null);
  const [winningNumber, setWinningNumber] = useState(
    generateRandomNumber(1, 100)
  );
  const [minNumber, setMinNumber] = useState(1);
  const [maxNumber, setMaxNumber] = useState(100);
  const [userState, setUserState] = useState(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const getUserInput = (event) => {
    setUserInput(event.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      //Enter keycode
      handleSubmit(e.target.value);
    }
  };

  const handleReset = () => {
    setLives(startingLives);
    setUserState(null);
    setWinningNumber(generateRandomNumber(minNumber, maxNumber));
  };

  const handleSubmit = (input) => {
    input = parseInt(input);
    compareNumber(input, winningNumber);
  };

  const compareNumber = (userNumber, gameNumber) => {
    if (userNumber === gameNumber) {
      setUserState(1);
    } else if (userNumber > gameNumber) {
      setLives((prevState) => prevState - 1);
      console.log(winningNumber);
    } else {
      setLives((prevState) => prevState - 1);
      console.log(winningNumber);
    }
  };

  if (userState === 1) {
    return (
      <div onClick={handleReset}>
        <h2>You Won !</h2>
        <h3>Click to reset the game.</h3>
      </div>
    );
  } else if (lives === 0) {
    return (
      <div onClick={handleReset}>
        <h2>You Lost !</h2>
        <h3>Click to reset the game.</h3>
      </div>
    );
  }

  return (
    <div>
      <h3>Take Your Guess </h3>
      <div>
        <GuessBox
          type="number"
          placeholder={`Number ${minNumber}-${maxNumber}`}
          onChange={getUserInput}
          onKeyDown={handleKeyPress}
        />
        <button onClick={() => handleSubmit(userInput)}>Submit</button>
        <button onClick={handleReset}>Try Again!</button>
        <h4>You have {lives} lives remaining.</h4>
      </div>
      <SettingsIcon size="3em" onClick={() => setIsSettingsOpen(true)} />

      <Settings
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      >
        <br />
        Set minNumber:
        <input type="number" placeholder={minNumber} onChange={getUserInput} />
        <button onClick={() => setMinNumber(userInput)}>set</button>
        <br />
        Set maxNumber:
        <input type="number" placeholder={maxNumber} onChange={getUserInput} />
        <button onClick={() => setMaxNumber(userInput)}>set</button>
        <br />
        <button onClick={() => setStartingLives((prevState) => prevState - 1)}>
          -
        </button>
        Starting Lives: {startingLives}
        <button onClick={() => setStartingLives((prevState) => prevState + 1)}>
          +
        </button>
        <br />
        <button onClick={() => setStartingLives(5)}>Reset Lives</button>
      </Settings>
    </div>
  );
};

export default Game;
