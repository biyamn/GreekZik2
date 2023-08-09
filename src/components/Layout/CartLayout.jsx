import React from "react";
import styled from "styled-components";
import SubCartModal from "../Cart/SubCartModal";

const CartLayout = () => {
  return (
    <Container>
      <h1>카트</h1>
      <SubCartModal />
    </Container>
  );
};

const Container = styled.div`
  background-color: blue;
  width: 30%;
`;

export default CartLayout;
