import React, { useContext } from "react";
import { ImgRenderArts } from "../imgRenderArts/ImgRenderArts";
import { MainContent } from "../RenderArts/RenderArtsStyle";
import PageArtContext from "../../data/context/pageArtContext/PageArtContext";
const PageArt = () => {

  const { pageArt, setPageArt } = useContext(PageArtContext);

  
  return (
    <MainContent>
      <ImgRenderArts appearance={"span"} src={pageArt.img} />
    </MainContent>
  );
};

export default PageArt;
