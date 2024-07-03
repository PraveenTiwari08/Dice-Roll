import React from "react";
import styled from "styled-components";
import { Button } from "../styled/Button";

const Container = styled.div`
  font-family: Poppins;
  display: flex;
  margin: 0 auto;
  height: 100vh;
  align-items: center;
  justify-content: center;

  .head{
   p{
    font-size: 96px;
    font-weight: 900;
    margin: 0 0;
    line-height: 110%;
   }
  }
`;



const Home = ({toggle}) => {
  return (
    <Container>
      <div>
        <img src="./src/assets/dices1.png" alt="" />
      </div>
      <div className="head">
        <p>DICE GAME</p>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default Home;
