import React from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RollDice from "./RollDice";
import { useState } from "react";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [Score, setScore] = useState(0);
  const [selectedNumber, setselectedNumber] = useState();
  const [currentDice, setcurrentDice] = useState(1);
  const [error, seterror] = useState("");
  const [ShowRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    console.log(Math.floor(Math.random() * (max - min) + min));
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    if (!selectedNumber) {
      seterror("You have not selected any number");
      return;
    }
    const randomNumber = generateRandomNumber(1, 7);
    setcurrentDice((prev) => randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + random);
    } else {
      setScore((prev) => prev - 2);
    }

    setselectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };


  return (
    <>
      <MainContainer>
        <div className="top_section">
          <TotalScore Score={Score}></TotalScore>
          <NumberSelector
            error={error}
            seterror={seterror}
            selectedNumber={selectedNumber}
            setselectedNumber={setselectedNumber}
          ></NumberSelector>
        </div>
        <RollDice
          resetScore={resetScore}
          rollDice={rollDice}
          generateRandomNumber={generateRandomNumber}
          currentDice={currentDice}
        ></RollDice>

        <div className="buttons">
          <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
          <Button onClick={()=>setShowRules((prev) => !prev)}>{ShowRules ? "Hide" : "Show"} Rules</Button>
        </div>
      </MainContainer>
      {ShowRules && <Rules/>}
    </>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
    height: 50%;
  }

  .buttons {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 40px;
    align-items: center;
    margin-left: 48%;
  }
`;
