import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Button, OutlineButton } from "../styled/Button";

const RollDice = ({
  currentDice,
  resetScore,
  generateRandomNumber,
  rollDice,
}) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={rollDice}>
        <img src={`/dice_${currentDice}.png`} alt="" />
      </div>
      <h2>Click On The Dice Roll</h2>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;

  h2 {
    font-family: Poppins;
    font-size: 23px;
    font-weight: 900;
    line-height: 36px;
    text-align: left;
    margin-top: 5px;
  }

  .dice {
    cursor: pointer;
  }
`;
