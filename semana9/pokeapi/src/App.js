import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
import PokeCard from "./components/PokeCard";

export default function App() {
  const [pokeList, setPokeList] = useState([]);
  const [pokeName, setPokeName] = useState("");

  useEffect(() => {
    const executaRequisicao = () => {
      axios
        .get("https://pokeapi.co/api/v2/pokemon/?limit=15")
        .then((response) => {
          console.log(response.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    };

   
  });
  const pegaPokemon = (event) => {
    setPokeName(event.target.value);
  };
  return (
    <div className="App">
      <select onChange={pegaPokemon}>
        <option value={""}>Nenhum</option>
        return (<option></option>
        );
      </select>
    </div>
  );
}
