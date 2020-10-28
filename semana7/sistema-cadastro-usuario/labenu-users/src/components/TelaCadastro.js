import React from "react";
import axios from "axios";

export class TelaCadastro extends React.Component {
  state = {
    pegarCadastro: "",
    pegarCadastroName: "",
    pegarCadastroEmail: ""
  };

  pegarCadastro = () => {
    const body = {
      name: this.state.pegarCadastro.name,
      email: this.state.pegarCadastro.email
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
      .then((resposta) => {
        console.log(resposta.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  onChangepegarCadastroName = (event) => {
    this.setState({ pegarCadastro: event.target.value });
  };

  onChangepegarCadastroEmail = (event) => {
    this.setState({ pegarCadastro: event.target.value });
  };

  render() {
    return (
      <div>
        {" "}
        <label>Nome:</label>
        <input
          type="text"
          value={this.state.pegarCadastro}
          onChange={this.onChangepegarCadastroName}
        />
        <label>Email: </label>
        <input
          type="text"
          value={this.state.pegarCadastro}
          onChange={this.onChangepegarCadastroEmail}
        />
        <button onClick={this.pegarCadastro}>Salvar</button>
      </div>
    );
  }
}
