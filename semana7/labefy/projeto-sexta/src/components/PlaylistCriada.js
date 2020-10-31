import React from "react";
import axios from "axios";

class PlaylistCriada extends React.Component {
  state = {
    playlists: [],
  };
  
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
      .then((resposta) => {
        this.setState({ playlists: resposta.data.result.list });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  render() {
    
    const renderizaPlaylists = this.state.playlists.map((playlist) => {
      return <p key={playlist.id}>{playlist.name}</p>
    });
    return (
      <div>
        <ul>
          <li>
            <p>Nome: { this.state.playlists}</p>
          </li>
        </ul>
        <div>{renderizaPlaylists}</div>
      </div>
    );
  }
}

export default PlaylistCriada;
