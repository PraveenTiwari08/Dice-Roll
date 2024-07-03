import React from "react";
import styled from "styled-components";

const TotalScore = ({Score}) => {
  return (
    <ScoreContainer>
      <h1>{Score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
};

export default TotalScore;


const ScoreContainer = styled.div`
max-width: 200px;
text-align: center;
  h1{
    font-family: Poppins;
    font-size: 100px;
    line-height: 100px;
    margin: 0;
  }

  p{
    font-family: Poppins;
    font-size: 24px;
    font-weight: 900;
    margin:0;
  }
`