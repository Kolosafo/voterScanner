import styled from 'styled-components';

export const SupportContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 70px;
  border-radius: 10px;

  @media only screen and (max-width: 768px) {
    padding: 17px;
    border-radius: 10px;
    width: 90%;
    /* height: 90%; */
    position: absolute;
    top: 8%;
    left: 5%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 20px;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    width: 90%;
  }
`;
