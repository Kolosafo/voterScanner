import styled from "styled-components";

export const LoaderDiv = styled.div`
  height: 80v;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & .Typewriter {
    font-size: 16px;
  }
`;

export const TyprewriterDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  text-align: center;
  & .Typewriter {
    text-align: center;
    font-size: 16px;
  }
`;
