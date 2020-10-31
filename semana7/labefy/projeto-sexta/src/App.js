import React from "react";
import CriandoPlaylist from "./components/CriandoPlaylist";
import PlaylistCriada from "./components/PlaylistCriada";

class App extends React.Component {
  state = {
    proximaPagina: false,
  };

  trocarPagina = () => {
    this.setState({ proximaPagina: !this.state.proximaPagina });
  };

  render() {
    const paginaNova = this.state.proximaPagina ? (
      <PlaylistCriada />
    ) : (
      <CriandoPlaylist />
    );
    return (
      <div className="App">
        <button onClick={this.trocarPagina}>Próxima pagina</button>
        <div>{paginaNova}</div>
      </div>
    );
  }
}

export default App;

