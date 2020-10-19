import React from "react";
import styled from "styled-components";

const Div = styled.div`
  font-family: "Times New Roman", Times, serif;
  font-size: 1em;
  text-align: center;
  padding: 18px;
`;

const H2 = styled.h2`
color: #dfbfbd;
`;

export class Etapa4 extends React.Component {
  render() {
    return (
      <Div>
        <H2>O FORMULÁRIO ACABOU :)</H2>
        <p>Muito obrigado por participar! Entraremos em contato!</p>
      </Div>
    );
  }
}
