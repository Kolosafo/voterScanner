import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90vw;
  /* border: 1px solid white; */
  align-self: flex-start;

  & .Typewriter {
    align-self: flex-start;
    margin-left: 71px;
    font-size: 20px;
  }

  @media only screen and (max-width: 768px) {
    & .Typewriter {
      margin-left: 17px;
      font-size: 10px;
    }
  }
`;
export const Party = styled.div`
  width: 90%;
  height: 15vw;
  border: 3px solid grey;
  border-radius: 10px;
  margin: 15px 0px;
  cursor: pointer;
  /* flex-wrap: wrap; */

  display: flex;
  justify-content: space-around;
  background: linear-gradient(to right, #e30325, #008d40);

  & h1 {
    font-size: 4.5vw;
  }
`;

const fadeOut = keyframes`
  from {
    transform: scale(1);
    opacity: 0;
  }

  to {
    transform: scale(.25);
    opacity: 1;
  }
`;
