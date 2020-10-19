import React from "react";

export class Etapa3 extends React.Component {
    render() {
      return (
        <div>
          <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
          <p>7. Por que você não terminou um curso de graduação?</p>
          <input></input>
          <p>8. Você fez algum curso complementar?</p>
          <select name="cursos" id="cursos">
          <option>Nenhum</option>
          <option>Curso técnico</option>
          <option>Curso de inglês</option>
        </select>
        </div>
      );
    }
  }