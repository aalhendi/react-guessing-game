import { useState } from "react";

const generateRandomNumber = (rangeMin, rangeMax) => {
  const min = Math.ceil(rangeMin);
  const max = Math.floor(rangeMax);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const Game = () => {
  const startingLives = 5;
  const [lives, setLives] = useState(startingLives);
  const [userInput, setUserInput] = useState(null);
  const [winningNumber, setWinningNumber] = useState(
    generateRandomNumber(1, 100)
  );
  const [userState, setUserState] = useState(null);

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
    setWinningNumber(generateRandomNumber(1, 100));
  };

  const handleSubmit = (input) => {
    input = parseInt(input);
    compareNumber(input, winningNumber);
  };

  const compareNumber = (userNumber, gameNumber) => {
    if (userNumber === gameNumber) {
      //Handle win
      alert("You won!");
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
      <label>Take Your Guess </label>
      <input
        type="number"
        placeholder="eg. 99"
        onChange={getUserInput}
        onKeyDown={handleKeyPress}
      />
      <button onClick={() => handleSubmit(userInput)}>Submit</button>
      <button onClick={handleReset}>Try Again!</button>
      <p>You have {lives} lives remaining.</p>
      <div>{}</div>
    </div>
  );
};

export default Game;
