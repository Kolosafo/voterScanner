import React, { FC } from "react";
import { Rings } from "react-loader-spinner";
import styled from "styled-components";

type Props = {
  loading: boolean;
};
const Loading: FC<Props> = ({ loading }) => {
  const LoaderContainer = styled.div`
    background-color: rgba(0, 0, 0, 1);
    position: fixed;
    overflow: hidden;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    display: ${() => (loading ? "flex" : "none")};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 24px;
    font-weight: 700;
  `;
  return (
    <LoaderContainer>
      <Rings
        visible={true}
        height="300"
        width="250"
        ariaLabel="comment-loading"
        wrapperStyle={{}}
        wrapperClass="comment-wrapper"
        color="#fff"
      />
    </LoaderContainer>
  );
};

export default Loading;
