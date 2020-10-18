import React from "react";
import "./App.css";
import Post from "./components/Post/Post";
import globodeneve from './imagens/globodeneve.jpg'
import balao from './imagens/balao.jpg'
import lauren from './imagens/lauren.jpg'
import melissa from './imagens/melissa.jpg'

class App extends React.Component {
  state = {
    pessoas: [
      {
      nomeUsuario1: "Paulinha",
      fotoUsuario: "https://picsum.photos/50/50",
      fotoPost: "https://picsum.photos/200/150"
      },
      {
        nomeUsuario2: lauren,
        fotoUsuario: lauren,
        fotoPost: globodeneve
      },
      {
        nomeUsuario3: melissa,
       fotoUsuario: melissa,
       fotoPost: balao
      }
    ],
    valorInputUser: "",
    valorInputFotoUser: "",
    valorInputFotoPost: ""
  };
  render() {
    const listaDeComponentes = this.state.pessoas.map((pessoa)=>{
      return (
        <Post
        nomeUsuario={pessoa.nomeUsuario}
        fotoUsuario={pessoa.fotoUsuario}
        fotoPost={pessoa.fotoPost}
     />
      );
    });
    return (
      <div>
        {listaDeComponentes}
      </div>
    );
  }
}
export default App; 










       
        

        
       
   
       
       

  