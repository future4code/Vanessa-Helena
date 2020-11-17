import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Navegacao = styled.div`
  width: 100vw;
  height: 60px;
  background-color: #dcdcdc;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
`;

export default function HomePage() {
  const history = useHistory();

  const irParaPaginaInscrever = () => {
    history.push("/ApplicationFormPage");
  };
  return (
    <Navegacao>
      <button>Login Parte Administrativa</button>
      <button onClick={irParaPaginaInscrever}>
        Formulário para se inscrever
      </button>
    </Navegacao>
  );
}


