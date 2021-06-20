import { useState } from "react";
import Settings from "./SettingsModal";
import { SettingsIcon, GuessBox, HintButton } from "../styles";

const generateRandomNumber = (rangeMin, rangeMax) => {
  const min = Math.ceil(rangeMin);
  const max = Math.floor(rangeMax);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const Game = () => {
  const [userState, setUserState] = useState(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [startingLives, setStartingLives] = useState(5);
  const [lives, setLives] = useState(startingLives);
  const [userInput, setUserInput] = useState(null);
  const [minNumber, setMinNumber] = useState(1);
  const [maxNumber, setMaxNumber] = useState(100);
  const [winningNumber, setWinningNumber] = useState(
    generateRandomNumber(minNumber, maxNumber)
  );
  const [isHintsOpen, setIsHintsOpen] = useState(false);
  const [closestGuessAbove, setClosestGuessAbove] = useState(null);
  const [closestGuessBelow, setClosestGuessBelow] = useState(null);
  const [winMultiplier, setWinMultiplier] = useState(1.1);

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
    setClosestGuessAbove(null);
    setClosestGuessBelow(null);
    if (userState) {
      setMaxNumber((prevState) => Math.round((prevState *= winMultiplier)));
    }
    setWinningNumber(generateRandomNumber(minNumber, maxNumber));
    setUserState(null);
  };

  const handleSubmit = (input) => {
    input = parseInt(input);
    compareNumber(input, winningNumber);
  };

  const handleSetDefaults = () => {
    setStartingLives(5);
    setMinNumber(1);
    setMaxNumber(100);
    setWinMultiplier(1.1);
  };

  const compareNumber = (userNumber, gameNumber) => {
    if (userNumber === gameNumber) {
      setUserState(1);
    } else if (userNumber > gameNumber) {
      setLives((prevState) => prevState - 1);
      if (!closestGuessAbove) {
        setClosestGuessAbove(userNumber);
      } else if (
        Math.abs(userNumber - gameNumber) <
        Math.abs(closestGuessAbove - gameNumber)
      ) {
        setClosestGuessAbove(userNumber);
      }
      console.log(gameNumber);
    } else {
      setLives((prevState) => prevState - 1);
      if (!closestGuessBelow) {
        setClosestGuessBelow(userNumber);
      } else if (
        Math.abs(userNumber - gameNumber) <
        Math.abs(closestGuessBelow - gameNumber)
      ) {
        setClosestGuessBelow(userNumber);
      }
      console.log(gameNumber);
    }
  };

  if (userState) {
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
      <div>
        <h3>Take Your Guess </h3>
        <HintButton onClick={() => setIsHintsOpen(!isHintsOpen)}>
          Hints ?
        </HintButton>
        {/* I HATE NESTED TERNARY OPERATORS */}
        <div>
          {isHintsOpen ? (
            lives === startingLives ? (
              <h4>Guess first &gt;:/</h4>
            ) : closestGuessBelow === null ? (
              <h4>
                {minNumber} ≤ n {closestGuessAbove}
              </h4>
            ) : closestGuessAbove === null ? (
              <h4>
                {closestGuessBelow} ≤ n ≤ {maxNumber}
              </h4>
            ) : (
              <h4>
                {closestGuessBelow} ≤ n ≤ {closestGuessAbove}
              </h4>
            )
          ) : (
            <span>&nbsp; &nbsp;</span>
          )}
        </div>
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
        <label>Min Number:</label>
        <GuessBox
          type="number"
          placeholder={minNumber}
          onChange={getUserInput}
        />
        <button onClick={() => setMinNumber(userInput)}>Set Min</button>

        <label>Max Number:</label>
        <GuessBox
          type="number"
          placeholder={maxNumber}
          onChange={getUserInput}
        />
        <button onClick={() => setMaxNumber(userInput)}>Set Max</button>

        <label>Starting Lives:</label>
        <GuessBox
          type="number"
          placeholder={startingLives}
          onChange={getUserInput}
        />
        <button onClick={() => setStartingLives(userInput)}>Set Lives</button>

        <span>
          <button
            onClick={() => setWinMultiplier((prevState) => prevState - 0.1)}
          >
            -
          </button>
          <label>Win Multiplier: {winMultiplier.toFixed(2)}</label>
          <button
            onClick={() => setWinMultiplier((prevState) => prevState + 0.1)}
          >
            +
          </button>
        </span>

        <button onClick={handleSetDefaults}>Reset Settings</button>
      </Settings>
    </div>
  );
};

export default Game;
