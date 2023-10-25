import React, { useEffect } from "react";
import { MainContent } from "./RenderArtsStyle";
import { ImgRenderArts } from "../imgRenderArts/ImgRenderArts";
import { Link } from "react-router-dom";
import { artworks } from "../../data/services/api";


const RenderArts = () => {
  // Lista de obras do artista (pode ser um array de URLs de imagens)
  return (
    <MainContent>
      <header>
        <h1>Nome do Artista</h1>
        <p>Descrição do que o artista faz</p>
      </header>

      <section className="artworks">
        {artworks.map((obras, index) => {
          return (
              <ImgRenderArts className="artwork-detail" appearance={Link} to={`/${obras.nome}`} src={obras.img} />
          );
        })}
      </section>
    </MainContent>
  );
};

export default RenderArts;
