import React, { useCallback, useContext, useEffect, useState } from "react";
import { MainContent } from "./RenderArtsStyle";
import { ImgRenderArts } from "../imgRenderArts/ImgRenderArts";
import { Link } from "react-router-dom";
import { artworks } from "../../data/services/api";
import PageArtContext from "../../data/context/pageArtContext/PageArtContext";

const RenderArts = () => {
  const { pageArt, setPageArt } = useContext(PageArtContext);


  return (
    <MainContent>
      <section className="artworks">
        {artworks.map((obras, index) => {
          return (
            <ImgRenderArts
              key={obras.nome}
              className="artwork-detail"
              appearance={Link}
              to={`/${obras.nome}`}
              src={obras.img}
              onClick={() => setPageArt({ nome: obras.nome, img: obras.img })}
            />
          );
        })}
      </section>
    </MainContent>
  );
};

export default RenderArts;
