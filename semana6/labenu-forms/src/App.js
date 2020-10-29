import React from "react";
import styled from "styled-components";
import { Etapa1 } from "./components/Etapa1";
import { Etapa2 } from "./components/Etapa2";
import { Etapa3 } from "./components/Etapa3";
import { Etapa4 } from "./components/Etapa4";

const Div = styled.div`
 
  font-size: 1em;
  text-align: center;
  margin:5px;
`;

class App extends React.Component {
  state = {
    etapa: 1,
  };

  irParaProximaEtapa = () => {
    this.setState({
      etapa: this.state.etapa + 1,
    });
  };
  renderizarEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />;
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      case 4:
        return <Etapa4 />;
    }
  };
  render() {
    if (this.state.etapa === 4) {
      return <Etapa4 />;
    } else {
      return (
        <Div>
          {this.renderizarEtapa()}
          <button onClick={this.irParaProximaEtapa}>Próxima etapa</button>
        </Div>
      );
    }
  }
}
export default App;
