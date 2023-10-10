import React from 'react'
import { useState } from 'react';
const RenderArts = () => {
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  // Lista de obras do artista (pode ser um array de URLs de imagens)
  const artworks = [
    'link_para_obra1.jpg',
    'link_para_obra2.jpg',
    'link_para_obra3.jpg',
    // Adicione mais obras conforme necessário
  ];


  const renderArtworks = () => {
    return artworks.map((artwork, index) => (
      <div
        key={index}
        className="artwork-thumbnail"
      >
        <img src={artwork} alt={`Obra ${index + 1}`} />
      </div>
    ));
  };

  return (
    <div className="artist-portfolio">
      <header>
        <h1>Nome do Artista</h1>
        <p>Descrição do que o artista faz</p>
      </header>

      <section className="artworks">
        {selectedArtwork !== null ? (
          <div className="artwork-detail">
            <img src={artworks[selectedArtwork]} alt={`Obra ${selectedArtwork + 1}`} />
            {/* Adicione mais informações sobre a obra, se necessário */}
          </div>
        ) : (
          renderArtworks()
        )}
      </section>
    </div>
  );
};

export default RenderArts;