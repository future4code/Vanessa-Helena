import React from "react";
import { Divisao } from "./estilo";
import { useHistory } from "react-router-dom";
import { irParaCadastro } from "../../router/Coordinator";
import { useForm } from "../../hooks/useForm";
import { login } from "../../services/user";

export default function PaginaLogin() {
  const history = useHistory();
  const { form, onChange } = useForm({ email: "", password: "" });

  const mudancaInput = (event) => {
    const { value, name } = event.target;
    onChange(value, name);
  };

  const formDeEnvio = (event) => {
    event.preventDefault();
    login(form, history);
  };
  return (
    <Divisao>
      <div> Login :)</div>
      <form onSubmit={formDeEnvio}>
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
          value={form.password}
          required
          onChange={mudancaInput}
        />
        <button>Entrar</button>
      </form>
      <button onClick={() => irParaCadastro(history)}>
        Não tem login? Clique Aqui
      </button>
    </Divisao>
  );
}
