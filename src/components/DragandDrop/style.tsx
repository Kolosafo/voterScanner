import styled from "styled-components";
type Props = {
  type: string;
};

export const DragAndDropDiv = styled.div`
  flex-basis: 100%;
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  padding: 1px;
  margin-bottom: 12px;
`;

export const TextIconDiv = styled.div`
  flex-basis: 100%;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  & .text-mobile {
    display: none;
  }

  @media only screen and (max-width: 768px) {
    & .DragandDrop-text {
      display: none;
    }
    & .text-mobile {
      display: block;
    }
  }

  /* border: 2px solid red; */
`;

export const UploadInput = styled.input`
  width: 246px;
  height: 40px;
  font-size: 18px;
  color: white;
  font-weight: 700;
  padding: 1%;
  background-color: #d53b3b;
`;
