import React from "react";
import { HeaderStyle } from "./HeaderStyled";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <HeaderStyle>
      <Link to="/">
        <div className="header-description">
          <h1>Nome do Artista</h1>
          <p>Descrição do que o artista faz</p>
        </div>
      </Link>
    </HeaderStyle>
  );
};
