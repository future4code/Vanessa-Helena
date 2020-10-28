import React from "react";
import axios from "axios";

export class UsersCadastrados extends React.Component {
  state = {
    usuariosCadastrados: [],
  };

  componentDidMount = () => {
    this.pegarUsuariosCadastrados();
  };

  pegarUsuariosCadastrados = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "vanessa-helena-dumont",
          },
        }
      )
      .then((resposta) => {
        this.setState({ usuariosCadastrados: resposta.data.nome });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  render() {
    const trazUsuario = this.state.usuariosCadastrados.map((usuarios) => {
      return <p>{usuarios.name}</p>;
    });

    return (
      <div>
        {" "}
        <h2>Usuários Cadastrados:</h2>
        <ul>
          <li>{trazUsuario}</li>
        </ul>
      </div>
    );
  }
}
