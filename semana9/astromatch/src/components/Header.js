import React from "react";
import addpessoas from "../imagens/addpessoas.png";
import styled from "styled-components";

const HeaderStyle = styled.header`
  color: purple;
  border-radius: 10px;
  display: flex;
  align-items: center;
`;

const UsuarioImg = styled.img`
  cursor: pointer;
  &:hover {
  }
  width: 30px;
  height: 30px;
`;

export const Title1 = styled.span`
  margin-left: 5rem;
  color: #59aca1;
`;

export const Title2 = styled.span`
  color: #752e93;
`;

export default function Header(props) {
  return (
    <div>
      <HeaderStyle>
        <h1>
          <Title1>astro</Title1>
          <Title2>match</Title2>
        </h1>
        <div>
          {props.currentScreen ? (
            <UsuarioImg
              src={addpessoas}
              onClick={props.goTelaInicial}
              alt="usuario"
            />
          ) : (
            <UsuarioImg
              src={addpessoas}
              onClick={props.goTelaInicial}
              alt="usuario"
            />
          )}
        </div>
      </HeaderStyle>
    </div>
  );
}
