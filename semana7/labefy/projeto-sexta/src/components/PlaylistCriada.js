import React from "react";
import axios from "axios";
import styled from "styled-components";

const Titulo = styled.h2`
  text-align: center;
  color: black;
`;

const Input = styled.input`
  margin: 10px;
`;
const Botao = styled.button`
  margin: 10px;
  text-align: center;
`;
const axiosConfig = {
  headers: {
    Authorization: "vanessa-helena-dumont",
  },
};

class PlaylistCriada extends React.Component {
  state = {
    playlists: [],
    deletarPlaylist: [],
    nomeMusica: "",
    nomeArtista: "",
    urlMusica: "",
  };

  componentDidMount() {
    this.pegarPlaylists();
  }
  pegarPlaylists = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        {
          headers: {
            Authorization: "vanessa-helena-dumont",
          },
        }
      )
      .then((response) => {
        console.log(response);
        this.setState({ playlists: response.data.result.list });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  handleDeletarPlaylist = (playlistId) => {
    if (window.confirm("Tem certeza que deseja deletar essa playlist?")) {
      axios
        .delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`,
          axiosConfig
        )

        .then(() => {
          alert("Playlist apagada com sucesso!");
          this.pegarPlaylists();
        })
        .catch((e) => {
          alert("ERRO AO DELETAR PLAYLIST");
        });
    }
  };
  addOutrasCoisasNaPlaylist = (playlistId) => {
    const body = {
      name: this.state.nomeMusica,
      artist: this.state.nomeArtista,
      url: this.state.urlMusica,
    };
    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`,
        body,
        {
          headers: {
            Authorization: "vanessa-helena-dumont",
          },
        }
      )
      .then((response) => {
        console.log("response", playlistId);
        alert("Playlist criada com sucesso :)");
        this.setState({ nomeMusica: "" });
        this.setState({ nomeArtista: "" });
        this.setState({ urlMusica: "" });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  onChangeNomeMusica = (event) => {
    this.setState({ nomeMusica: event.target.value });
  };

  onChangeNomeArtista = (event) => {
    this.setState({ nomeArtista: event.target.value });
  };

  onChangeurlMusica = (event) => {
    this.setState({ urlMusica: event.target.value });
  };

  render() {
    const renderizaPlaylists = this.state.playlists.map((list) => {
      return (
        <li key={list.id}>
          {list.name}

          <Botao onClick={() => this.addOutrasCoisasNaPlaylist(list.id)}>
            Add música
          </Botao>
          <Botao onClick={() => this.handleDeletarPlaylist(list.id)}>
            Deletar
          </Botao>
        </li>
      );
    });

    return (
      <div>
        <Titulo>Todas Playlists criadas</Titulo>
        <Input
          value={this.state.nomeMusica}
          onChange={this.onChangeNomeMusica}
          placeholder="Digite o nome da música"
        />

        <Input
          value={this.state.nomeArtista}
          onChange={this.onChangeNomeArtista}
          placeholder="Digite o nome do artista"
        />
        <Input
          value={this.state.urlMusica}
          onChange={this.onChangeurlMusica}
          placeholder="Coloque a url da música aqui"
        />
        <ul>{renderizaPlaylists}</ul>
      </div>
    );
  }
}
export default PlaylistCriada;


