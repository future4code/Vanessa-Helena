import React from "react";
import "./App.css";
import Post from "./components/Post/Post";
import globodeneve from './imagens/globodeneve.jpg'
import balao from './imagens/balao.jpg'
import lauren from './imagens/lauren.jpg'
import melissa from './imagens/melissa.jpg'

class App extends React.Component {
  render() {
    return (
      <div className={"app-container"}>
        <Post
          nomeUsuario1={"paulinha"}
          fotoUsuario={"https://picsum.photos/50/50"}
          fotoPost={"https://picsum.photos/200/150"}
        />

        <Post
          nomeUsuario2={"lauren"}
          fotoUsuario={lauren}
          fotoPost={globodeneve}
        />

        <Post
          nomeUsuario3={"melissa"}
          fotoUsuario={melissa}
          fotoPost={balao}
        />
      </div>
    );
  }
}

export default App;
