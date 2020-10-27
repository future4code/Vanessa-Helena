import React from "react";

export class TelaCadastro extends React.Component {
  render() {
    return (
      <div>
        {" "}
        <label>Nome:</label>
        <input type="text"/>
        <label>Email: </label>
        <input type="text"/>
        <button>Salvar</button>
      </div>
    );
  }
}
