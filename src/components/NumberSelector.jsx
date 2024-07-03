import React from "react";
import styled from "styled-components";
import { useState } from "react";

const NumberSelector = ({
  error,
  seterror,
  selectedNumber,
  setselectedNumber,
}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setselectedNumber(value);
    seterror("");
  };
  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arrNumber.map((value, index) => (
          <Box
            key={index}
            isSelected={value === selectedNumber}
            onClick={()=>numberSelectorHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  .flex {
    display: flex;
    gap: 24px;
  }
  .error {
    color: red;
    font-size: 20px;
  }

  display: flex;
  flex-direction: column;
  align-items: end;
  font-family: Poppins;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 64px;

  p {
    margin: 0%;
  }
`;

const Box = styled.div`
  font-family: Poppins;
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 900;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
`;
