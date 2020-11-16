import React from "react";
import styled from "styled-components";

const Div = styled.div`
  font-family: "Times New Roman", Times, serif;
  font-size: 1em;
  text-align: center;
  padding: 18px;
`;


export class Etapa2 extends React.Component {
  render() {
    return (
      <Div>
        <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
        <p>5. Qual curso?</p>
        <input></input>
        <p>6. Qual a unidade de ensino?</p>
        <input></input>
      </Div>
    );
  }
}
