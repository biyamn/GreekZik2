import MainCartModal from "./components/Cart/MainCartModal";
import React, { useState, useEffect } from "react";
import MainHeader from "./components/Layout/MainHeader";
import CartProvider from "./store/CartProvider";
import SelectTopping from "./components/SelectTopping/SelectTopping";
import SubCartModal from "./components/Cart/SubCartModal";
import "./App.css";
import NavigationBar from "./components/Layout/NavigationBar";
import CartLayout from "./components/Layout/CartLayout";
import MenuLayout from "./components/Layout/MenuLayout";
import styled from "styled-components";

function App() {
  const [backendData, setBackendData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("ca2");
  const [mainCartIsShown, setMainCartIsShown] = useState(false);
  const [subCartIsShown, setSubCartIsShown] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("init");
  const [selectModalIsShown, setSelectModalIsShown] = useState(false);

  const fetchData = async () => {
    setStatus("loading");

    try {
      const response = await fetch(
        "https://greek-yogurt-order-app-17351-default-rtdb.firebaseio.com/data.json"
      );
      const data = await response.json();
      // setIsLoading을 같은 핸들러에서 써도 되는 이유: await로 시간차가 생기기 때문에

      setStatus("loaded");
      setBackendData(data);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    // console.log('useEffect 시작')
    fetchData();
  }, []);

  const showMainCartHandler = () => {
    setMainCartIsShown(true);
  };

  const hideMainCartHandler = () => {
    setMainCartIsShown(false);
  };

  const showSubCartHandler = () => {
    setSubCartIsShown(true);
  };

  const hideSubCartHandler = () => {
    setSubCartIsShown(false);
  };

  const showSelectModalHandler = () => {
    setSelectModalIsShown(true);
  };

  const hideSelectModalHandler = () => {
    setSelectModalIsShown(false);
  };

  if (status === "loading" || status === "init") {
    return <div>Loading...</div>;
  } else if (status === "loaded") {
    return (
      <CartProvider>
        {mainCartIsShown && (
          <MainCartModal hideMainCartHandler={hideMainCartHandler} />
        )}
        {/* <MainHeader showMainCartHandler={showMainCartHandler} /> */}
        <Main>
          {subCartIsShown && (
            <SubCartModal hideSubCartHandler={hideSubCartHandler} />
          )}
          <NavigationBar />
          <MenuLayout
            selectModalIsShown={selectModalIsShown}
            showSelectModalHandler={showSelectModalHandler}
            hideSelectModalHandler={hideSelectModalHandler}
            showSubCartHandler={showSubCartHandler}
            backendData={backendData}
            setBackendData={setBackendData}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <CartLayout />
        </Main>
      </CartProvider>
    );
  }
}

const Main = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default App;
