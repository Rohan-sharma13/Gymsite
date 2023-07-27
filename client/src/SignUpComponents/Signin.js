import React from "react";
import styled from "styled-components";
import lake from "../assets/lake.jpg";
// import darkness from "../assets/darkness.jpg";
import Sidebar from "./Sidebar";
import Main from "./Main";

const SignIn = () => {
  return (
    <Container>
      <Wrapper>
        <Sidebar />
        <Main />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  background: #eefcff;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
const Wrapper = styled.div`
  background-image: url(${lake});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  display: flex;
`;

export default SignIn;
