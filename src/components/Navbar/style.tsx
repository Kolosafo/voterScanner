import styled from "styled-components";


type Props = {
    open: boolean;
  };
export const Nav = styled.nav`
  position: absolute;
  top: 20px;
  right: 20px;
  /* border: 3px solid red; */
  width: 150px;
  transition: all 0.5s;

  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  font-size: 1vw;
  color: ${({ theme }) => theme};

  flex-flow: column nowrap;

  transform:  ${(props: Props) => (props.open ? "translateX(0)" : "translateX(70vw)")};

  ul {
    list-style: none;
    text-align: center;
    background-color: grey;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  li {
    cursor: pointer;
    white-space: nowrap;
    color: black;
    padding: 5px;
    margin-left: -30px;
  }
  @media only screen and (max-width: 768px) {
    top: 40px;
    left: 40vw;
    /* transform: ${(props: Props) => (props.open ? "translateX(0)" : "translateX(-70vw)")}; */
    transform:  ${(props: Props) => (props.open ? "translateX(-70vw)" : "translateX(0)")};
    display:  ${(props: Props) => (props.open ? "block" : "none")};
    font-size: 4vw;
  }
`;

export const Hamburger = styled.div`
  width: 3rem;
  height: 2rem;
  position: absolute;
  top: 20px;
  right: 20px;
  /* border: 3px solid red; */

  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;

  div {
    width: 2.5rem;
    height: 0.25rem;
    background-color: lightgrey;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.2s linear;
    cursor: pointer;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${(props: Props) => (props.open ? "translateX(100%)" : "translateX(0)")};
      opacity:  ${(props: Props) => (props.open ? "0" : "1")};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
  @media only screen and (max-width: 768px) {
    top: 20px;
    right: 20px;
  }
`;
