import './styles/App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserProvider } from './components/UserContext';
import { Register } from './pages/Register';
import { Game } from './pages/Game';
import { Question } from "./pages/Question";
import { Points } from './components/Points';
import RandomFact from './components/RandomFact';
import { Profile } from './components/Profile';

function App() {
  return (
    <UserProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/game" element={<Game />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </div>
    </UserProvider>
  );
}

export default App;
