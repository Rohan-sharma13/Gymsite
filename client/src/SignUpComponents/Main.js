import React from "react";
import styled from "styled-components";

const Main = () => {
  return <Container></Container>;
};

const Container = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  margin-top: 15vh;

  h1 {
    font-size: 65px;
    font-weight: 900;
    color: #343434;

    @media (max-width: 900px) {
      display: none;
    }
  }
`;

export default Main;
