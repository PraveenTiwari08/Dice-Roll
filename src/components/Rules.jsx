import React from "react";
import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <div className="text">
        <h2>How to play dice game</h2>
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>
          after click on dice if selected number is equal to dice number you
          will get same point as dice
        </p>
        <p>if you get wrong guess then 2 point will be dedcuted </p>
      </div>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  max-width: 620px;
  margin: 0 auto;
font-family: Poppins;
background-color:#FBF1F1;
padding: 15px;
margin-top: 10px;
h2{
  font-size: 20px;
  margin-bottom: 25px;
  font-weight: 900;
}
.text{
  font-size: 13px;
  line-height: 8px;
}

`;
