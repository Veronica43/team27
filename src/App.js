import './styles/App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Register } from './pages/Register';
import { Game } from './pages/Game';
import { Question } from "./pages/Question";
import RandomFact from './components/RandomFact'



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
