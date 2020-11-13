import styled from "styled-components";
import TelaInicial from "./components/TelaInicial";
import MostraMatches from "./components/MostraMatches";
import Header from "./components/Header";
import "./App.css";
import React, { useState } from "react";

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export default function App() {
  const [currentPage, setCurrentPage] = useState(true);

  const setPage = () => {
    setCurrentPage(!currentPage);
  };

  return (
    <AppContainer>
      {" "}
      <Header goTelaInicial={setPage} currentScreen={currentPage} />
      {currentPage ? <TelaInicial /> : <MostraMatches />}
    </AppContainer>
  );
}
