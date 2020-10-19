import React from "react";
import styled from "styled-components";

const Div = styled.div`
  font-family: "Times New Roman", Times, serif;
  font-size: 1em;
  text-align: center;
  padding: 18px;
`;

const Input = styled.input`
  outline: 0;
`;
export class Etapa1 extends React.Component {
  render() {
    return (
      <Div>
        <h2>ETAPA 1 - DADOS GERAIS</h2>
        <p>1. Qual o seu nome?</p>
        <Input></Input>
        <p>2. Qual sua idade?</p>
        <Input></Input>
        <p>3. Qual seu e-mail?</p>
        <Input></Input>
        <p>4. Qual a sua escolaridade?</p>
        <select name="escolaridade" id="escolaridade">
          <option>Ensino médio incompleto</option>
          <option>Ensino médio completo</option>
          <option>Ensino superior incompleto</option>
          <option>Ensino superior completo</option>
        </select>
      </Div>
    );
  }
}
