import React from "react";
import styled from "styled-components";

const NavigationBar = () => {
  return (
    <Container>
      <h1>네비게이션</h1>
      <span>커스텀</span>
      <span>완제품</span>
    </Container>
  );
};

const Container = styled.div`
  background-color: pink;
  width: 10%;
`;

export default NavigationBar;
