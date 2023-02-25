import styled from "styled-components";

const ModalContainer = styled.div`
  display: flex;
  flex-basis: 100%;
  flex-direction: column;
  align-items: center;
  position: relative;
  box-shadow: 0 0 32px rgb(0, 222, 255);
  padding: "40px";
  background-color: #ffffff;
`;

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 15;
`;

export const DesktopModalContainer = styled(ModalContainer)`
  position: relative;
  flex-basis: 80%;
  border-radius: 30px;
  box-shadow: 0 0 32px rgba(0, 0, 0, 0.5);
  padding: "40px";
  display: flex;
  justify-content: space-evenly;
  width: 600px;
  height: 625px;
  font-size: 26px;
  color: black;

  & .editCanvas {
    width: 450px;
    height: 450px;
    cursor: grab;
    touch-action: none;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    font-weight: 700;
    font-size: 15px;

    & .editCanvas {
      width: 80%;
      height: 80%;
    }
  }
`;

export const Header = styled.h3`
  color: black;
  font-size: 25px;
  line-height: 1em;
  font-weight: 800;
  margin: 5px 0 10px;
  text-align: center;
`;
