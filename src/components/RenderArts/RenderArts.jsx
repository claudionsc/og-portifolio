import React from "react";
import { MainContent } from "./RenderArtsStyle";
import { ImgRenderArts } from "../ImgRenderArts/ImgRenderArts";
import { Link } from "react-router-dom";

const RenderArts = () => {
  // Lista de obras do artista (pode ser um array de URLs de imagens)
  const artworks = [
    { nome: "link_para_obra1.jpg" },
    { nome: "link_para_obra2.jpg" },
    { nome: "link_para_obra3.jpg" },
    // Adicione mais obras conforme necessário
  ];

  return (
    <MainContent>
      <header>
        <h1>Nome do Artista</h1>
        <p>Descrição do que o artista faz</p>
      </header>

      <section className="artworks">
        {artworks.map((obras, index) => {
          return (
            <span className="artwork-detail">
              <ImgRenderArts appearance={Link} to={`/art/${obras.nome}`}>
                <img src="" alt={`Obra `} />
              </ImgRenderArts>
            </span>
          );
        })}
      </section>
    </MainContent>
  );
};

export default RenderArts;
