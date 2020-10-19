import React from "react";
import "./App.css";
import { Etapa1 } from "./components/Etapa1";
import { Etapa2 } from "./components/Etapa2";
import { Etapa3 } from "./components/Etapa3";
import { Etapa4 } from "./components/Etapa4";

class App extends React.Component {
  state = {
    etapa: 1
  };
 
  irParaProximaEtapa = () => {
    

}
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
    return (
      
      <div>
       
        {this.renderizarEtapa()}
        <button onClick={this.proximaEtapa} />
      </div>
    );
  }
}
export default App;
