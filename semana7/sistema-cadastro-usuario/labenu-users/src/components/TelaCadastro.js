import React from "react";
import axios from "axios";
// import styled from "styled-components";

// const Divisao = styled.span`
//   text-align: center;
//   margin-left: 10px;
// `;


class TelaCadastro extends React.Component {
  state = {
    pegarCadastroName: "",
    pegarCadastroEmail: "",
  };

  pegarCadastro = () => {
    const body = {
      name: this.state.pegarCadastroName,
      email: this.state.pegarCadastroEmail,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "vanessa-helena-dumont",
          },
        }
      )
      .then(() => {
        alert("Usuário criado com sucesso!");
        this.setState({ pegarCadastroName: "", pegarCadastroEmail: "" });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  onChangepegarCadastroName = (event) => {
    this.setState({ pegarCadastroName: event.target.value });
  };

  onChangepegarCadastroEmail = (event) => {
    this.setState({ pegarCadastroEmail: event.target.value });
  };

  render() {
    return (
      <div>
        <label>Nome:</label>
        <input
          type="text"
          value={this.state.pegarCadastroName}
          onChange={this.onChangepegarCadastroName}
        />
        <label>Email: </label>
        <input
          type="text"
          value={this.state.pegarCadastroEmail}
          onChange={this.onChangepegarCadastroEmail}
        />
        <button onClick={this.pegarCadastro}>Salvar</button>
      </div>
    );
  }
}

export default TelaCadastro;
