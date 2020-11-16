import React from "react";
import axios from "axios";

export class PaginaPrincipal extends React.Component {
  state = {
    pegarFoguetes: [],
  };


  onClickButton = () => {
    const apiUrl = "https://api.spacexdata.com/v3/rockets";
    axios.get(apiUrl).then((response) => {
    //   console.log("RESPOSTA", response);
      this.setState({ pegarFoguetes: response.data });
    });
  };

  render() {
    const novaLista = this.state.pegarFoguetes.map((caracteristicas) => {
        return (
          <p>
            {caracteristicas.rocket_name}
            {caracteristicas.description}
            {caracteristicas.flickr_imagens}
            
          </p>
        );
      });
  
    console.log("ATIVIDADE", this.state.pegarFoguetes);
    return (
      <div className="App">
        <button onClick={this.onClickButton}>
          Quero ver todos os foguetes
        </button>

        <p>Nome dos foguetes: {this.state.rocket_name}</p>
        <p>Descrição dos foguetes: {this.state.description}</p>
        <p>Fotos: {this.state.flickr_imagens}</p>
      </div>
    );
  }
}
