import axios from "axios";
import React from "react";
import styled from "styled-components";

const Div = styled.div`
  text-align: center;
  color: black;
`;

export default class CriandoPlaylist extends React.Component {
  state = {
    inputPlaylist: "",
  };

  criarPlayList = () => {
    const body = {
      name: this.state.inputPlaylist,
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        body,
        {
          headers: {
            Authorization: "vanessa-helena-dumont",
          },
        }
      )
      .then((response) => {
        alert("Playlist criada com sucesso !!!");
        this.setState({ inputPlaylist: "" });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  onChangeInputPlaylist = (event) => {
    this.setState({ inputPlaylist: event.target.value });
  };

  render() {
    return (
      <Div>
        <h1>Criando playlist</h1>
        <input
          value={this.state.inputPlaylist}
          onChange={this.onChangeInputPlaylist}
          placeholder="Digite o nome da playlist"
        />
        <button onClick={this.criarPlayList}>Salvar</button>
        <p>Clique no botão para ver as playlists criadas.</p>
      </Div>
    );
  }
}
