import React, { useEffect, useState } from "react";
import { Divisao } from "./styled";
import { MeuBotao } from "./styled";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      history.push("/TripDetailsPage");
    }
  }, [history]);

  const pegaEmail = (event) => {
    setEmail(event.target.value);
  };

  const pegaSenha = (event) => {
    setSenha(event.target.value);
  };

  const login = () => {
    const body = {
      email: email,
      senha: senha,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/vanessa-helena-dumont/login",
        body
      )
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        history.push("/TripDetailsPage");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Divisao>
      <p>Login</p>
      Email: <input value={email} onChange={pegaEmail}></input>
      Senha: <input value={senha} onChange={pegaSenha}></input>
      <MeuBotao>Fazer login</MeuBotao>
    </Divisao>
  );
}

