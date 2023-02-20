import styled from "styled-components";
import { pulsate } from "../../components/ProfileImg/style";

export const CaptureBtn = styled.button`
  font-size: 4vw;
  border: 2px solid white;
  margin: 20px 0px;
  animation-name: ${pulsate};
  animation-duration: 3s;
  animation-iteration-count: infinite;
`;

export const ThumbImg = styled.img``;
