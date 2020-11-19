import React, { useState } from "react";
import { Divisao } from "./styled";

const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);

  const onChange = (name, value) => {
    const newForm = { ...form, [name]: value };
    setForm(newForm);
  };

  return { form, onChange };
};
export default function ApplicationFormPage() {
  const { form, onChange } = useForm({ nome: "", idade: 0 , profissao: "", pais: "", frase: ""});

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    onChange(name, value);
  };
  return (
    <Divisao>
      <p>Formulário de inscrição</p>
      <form>
      <label>Nome:</label>
        <input 
          value={form.nome}
          type="text"
          name="nome"
          pattern="[A-Z]"
          title="Por favor, somente maiúsculas"
          required
          onChange={handleInputChange}
        />
        <label>Idade:</label>
         <input
          value={form.idade}
          type="number"
          name="idade"
          max="100"
          onChange={handleInputChange}
        />
        <label>Profissão:</label>
        <input
          value={form.profissao}
          type="text"
          name="profissao"
          required
          onChange={handleInputChange}
        />
        <label>País:</label>
        <input
          value={form.pais}
          type="text"
          name="pais"
          required
          onChange={handleInputChange}
        />
        <label>Porque você quer se candidatar?</label>
        <input
          value={form.frase}
          type="text"
          name="frase"
          required
          onChange={handleInputChange}
        />
        <button>Enviar</button>
      </form>
    </Divisao>
  );
}

         
// Parte usuário
