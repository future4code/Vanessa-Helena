import React from "react";
import TelaCadastro from "./components/TelaCadastro";
import UsersCadastrados from "./components/UsersCadastrados";

class App extends React.Component {
  state = {
    telaCadastro: true
  };

  trocaPagina = () => {
    this.setState({ telaCadastro: !this.state.telaCadastro });
  };

  render() {
    const paginaAtual = this.state.telaCadastro ? <TelaCadastro /> : <UsersCadastrados />;

    return (
      <div className="App">
        {paginaAtual}
        <button onClick={this.trocaPagina}>Mudar de Página</button>
      </div>
    );
  }
}

export default App;
