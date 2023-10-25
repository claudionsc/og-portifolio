import React from "react";
import { MainContent } from "./RenderArtsStyle";
// import {TsImgArts as ImgRenderArts} from '../imgRenderArts'
import { ImgRenderArts } from "../imgRenderArts/ImgRenderArts";

const RenderArts = () => {
  // Lista de obras do artista (pode ser um array de URLs de imagens)
  const artworks = [
    "link_para_obra1.jpg",
    "link_para_obra2.jpg",
    "link_para_obra3.jpg",
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
          return( 
            <span className="artwork-detail">
              <ImgRenderArts.ImgRenderArts>
              <img src="" alt={`Obra `} />
              </ImgRenderArts.ImgRenderArts>
            </span>
          )
        })}
      </section>
    </MainContent>
  );
};

export default RenderArts;
