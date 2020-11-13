import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ImgMatch = styled.img`
  height: 100%;
  width: 50px;
  margin-right: 10px;
  border-radius: 50%;
`;

const CardInfo = styled.main`
  margin: 0 2.4em;
  border: 2px solid gray;
  width: 350px;
  height: 450px;
  padding: 5px;
`;

export default function MostrarMatches() {
  const [match, setMatch] = useState([]);
  const clear = () => {
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/vanessa-helena-dumont/clear"
      )
      .then(() => {
        getMatch();
        window.alert("Clear OK");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getMatch();
  }, []);
  const getMatch = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/vanessa-helena-dumont/matches"
      )
      .then((response) => {
        setMatch(response.data.matches);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const viewMatch = match.map((user) => {
    return (
      <div key={user.id}>
        <p>{user.name} </p>
        <ImgMatch src={user.photo}></ImgMatch>
      </div>
    );
  });
  return (
    <div>
      <CardInfo>{viewMatch}</CardInfo>
      <button onClick={clear}>Limpar</button>
    </div>
  );
}
