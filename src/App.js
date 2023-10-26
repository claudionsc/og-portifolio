import { useState } from "react";
import { Header } from "./components/header/Header";
import PageArtContext from "./data/context/pageArtContext/PageArtContext";
import "./styles/App.css";
import { Outlet } from "react-router-dom";

function App() {

  const [pageArt, setPageArt] = useState(null)
  
  return (
    <div className="App">
      <PageArtContext.Provider value={{pageArt, setPageArt}}> 
        <Header />
        <Outlet />
      </PageArtContext.Provider>
    </div>
  );
}

export default App;
