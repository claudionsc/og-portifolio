import './styles/App.css';
import { Outlet } from 'react-router-dom';
import RenderArts from './components/RenderArts/RenderArts';
import PageArt from './components/pageArt/PageArt';

function App() {
  return (
    <div className="App">
      <RenderArts />
      <Outlet />
    </div>
  );
}

export default App;
