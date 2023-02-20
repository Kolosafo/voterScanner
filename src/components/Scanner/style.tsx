import styled, { keyframes } from "styled-components";

type Prop = {
  finger_img: string;
};

const animate = keyframes`
    0%,100%{
height: 0%;
}

50%{
height: 100%;
}
`;
const animate_line = keyframes`
    0%,100%{
top: 0%;
}

50%{
top: 100%;
}
`;

export const Scan = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FingerPrint = styled.div`
  position: relative;
  width: 300px;
  height: 380px;
  background: ${(props: Prop) =>
    props.finger_img ? `url(${props.finger_img})` : ""};
  background-size: 300px;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(fingerprint_2.png);
    background-size: 300px;
    animation: ${animate} 4s ease-in-out infinite;
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 8px;
    background: #3fefef;
    border-radius: 8px;
    filter: drop-shadow(0 0 20px #3fefef) drop-shadow(0 0 60px #3fefef);
    animation: ${animate_line} 4s ease-in-out infinite;
  }
`;

const animate_text = keyframes`
    0%,100%{
opacity: 0;
}
50%{
opacity: 1;
}
`;

export const ScanH3 = styled.h3`
  text-transform: uppercase;
  color: #3fefef;
  font-size: 2em;
  letter-spacing: 2px;
  margin-top: 20px;
  filter: drop-shadow(0 0 20px #3fefef) drop-shadow(0 0 60px #3fefef);
  animation: ${animate_text} 0.5s steps(1) infinite;
`;
