import React from "react";
import { Divisao } from "./estilo";
import { useHistory } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { cadastro } from "../../services/user";

export default function PaginaCadastro() {
  const history = useHistory();
  const { form, onChange } = useForm({ username: "", email: "", password: "" });

  const mudancaInput = (event) => {
    const { value, name } = event.target;
    onChange(value, name);
  };

  const formDeEnvio = (event) => {
    event.preventDefault();
    cadastro(form, history);
  };
  console.log(form);
  return (
    <Divisao>
      <div> Cadastro :)</div>
      <form onSubmit={formDeEnvio}>
        <label>Nome:</label>
        <input
          name="username"
          required
          value={form.username}
          onChange={mudancaInput}
        />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          required
          value={form.email}
          onChange={mudancaInput}
        />
        <label>Senha:</label>
        <input
          type="password"
          name="password"
          required
          value={form.password}
          onChange={mudancaInput}
        />
        <button>Cadastrar</button>
      </form>
    </Divisao>
  );
}
