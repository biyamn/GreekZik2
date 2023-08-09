import React from "react";
import styled from "styled-components";
import SelectTopping from "../SelectTopping/SelectTopping";

const MenuLayout = ({
  showSelectModalHandler,
  hideSelectModalHandler,
  showSubCartHandler,
  backendData,
  setBackendData,
  selectedCategory,
  setSelectedCategory,
  selectModalIsShown,
}) => {
  return (
    <Container>
      <h1>메뉴</h1>

      <SelectTopping
        selectModalIsShown={selectModalIsShown}
        showSelectModalHandler={showSelectModalHandler}
        hideSelectModalHandler={hideSelectModalHandler}
        showSubCartHandler={showSubCartHandler}
        backendData={backendData}
        setBackendData={setBackendData}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    </Container>
  );
};

const Container = styled.div`
  background-color: red;
  width: 60%;
`;

export default MenuLayout;
