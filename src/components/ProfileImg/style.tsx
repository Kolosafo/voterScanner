import styled, { keyframes } from "styled-components";

export const pulsate = keyframes`
    0% {
    transform: scale(1);
    box-shadow: none;
  }

  50% {
    transform: scale(1.03);
    box-shadow:0 0.2rem .5rem #fff;  
  }

  100% {
    transform: scale(1);
    box-shadow: none;
  }

`;

export const Container = styled.div`
  & .Typewriter {
    font-size: 5vw;
    margin: 50px 0px;
  }
`;

export const PulsateDiv = styled.div`
  height: 70vh;
  width: 70vw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border: 3px solid white;
  animation-name: ${pulsate};
  animation-duration: 3s;
  animation-iteration-count: infinite;

  @media only screen and (max-width: 768px) {
    height: 50vh;
  }
`;
export const InputFileField = styled.input`
  font-size: 1.5vw;
  margin-left: 150px;
`;
