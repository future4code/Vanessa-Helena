import React from "react";
import axios from "axios";
import CriandoPlaylist from './components/CriandoPlaylist'

class App extends React.Component {
  render() {
    return <div className="App">
      <CriandoPlaylist />
    </div>
  }
}

export default App;

