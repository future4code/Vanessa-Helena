import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import negativo from "../imagens/negativo.png";
import coracao from "../imagens/coracao.png";

const PostContainer = styled.div`
  border: 2px solid gray;
  width: 350px;
  height: 450px;
  padding: 5px;
`;
const Texto = styled.ul`
  margin: 0;
  padding: 0;
  color: black;
`;
const Descricao = styled.div`
  font-family: "Lora", serif;
  text-align: left;
  margin-bottom: 30px;
  margin: 5px;
`;

const Imagem = styled.img`
   height: 300px;
    width: 350px;
    object-fit: contain;

`;
const Imagem2 = styled.img`
  margin-left: 80px;
  margin-bottom: 50px;
  width: 30px;
  height: 30;
`;
const Imagem3 = styled.img`
  margin-left: 80px;
  margin-bottom: 50px;
  width: 30px;
  height: 30px;
`;

export default function TelaInicial(props) {
  const [profile, setProfile] = useState({});
  const getProfile = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/vanessa-helena-dumont/person"
      )
      .then((response) => {
        setProfile(response.data.profile);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getProfile();
  }, []);
  const choosePerson = (response) => {
    const body = {
      id: profile.id,
      choice: response,
    };
    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/vanessa-helena-dumont/choose-person",
        body
      )
      .then(() => {
        getProfile();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <PostContainer>
        <Imagem src={profile.photo} alt="Fotos de pessoas"></Imagem>
        <Descricao>
          <Texto>
            {" "}
            {profile.name}, {profile.age}{" "}
          </Texto>
          <p>{profile.bio}</p>
          <Imagem2
            src={negativo}
            alt="Icone De X"
            onClick={() => choosePerson(false)}
          />
          <Imagem3
            src={coracao}
            alt="Imagem de coração"
            onClick={() => choosePerson(true)}
          />
        </Descricao>
      </PostContainer>
    </div>
  );
}
