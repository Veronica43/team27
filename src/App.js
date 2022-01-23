import './styles/App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Register } from './pages/Register';
import { Game } from './pages/Game';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
