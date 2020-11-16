import React from "react";
import styled from "styled-components";

const Div = styled.div`
  font-family: "Times New Roman", Times, serif;
  font-size: 1em;
  text-align: center;
  padding: 18px;
`;


export class Etapa3 extends React.Component {
    render() {
      return (
        <Div>
          <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
          <p>7. Por que você não terminou um curso de graduação?</p>
          <input></input>
          <p>8. Você fez algum curso complementar?</p>
          <select name="cursos" id="cursos">
          <option>Nenhum</option>
          <option>Curso técnico</option>
          <option>Curso de inglês</option>
        </select>
        </Div>
      );
    }
  }