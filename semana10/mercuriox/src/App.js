import React from "react";
import "./App.css";
import Inscrever from './components/Inscrever';
import LoginAdministrador from './components/LoginAdministrador';
import PaginaDeDetalhes from './components/PaginaDeDetalhes';
import PaginaInicial from './components/PaginaInicial';
import TodasRotas from './components/TodasRotas';
import ViagensDisponiveis from './components/ViagensDisponiveis';
import CriarViagens from './components/CriarViagens'
export default function App() {
  return (
    <div className="App">
    <CriarViagens />
    <Inscrever />
    <LoginAdministrador />
    <PaginaDeDetalhes />
    <PaginaInicial />
    <TodasRotas />
    <ViagensDisponiveis />
    </div>
  );
}

