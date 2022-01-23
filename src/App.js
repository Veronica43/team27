import "./styles/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "./pages/Register";
import { Game } from "./pages/Game";
import { Question } from "./pages/Question";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/game" element={<Game />} />
          <Route path="/question" element={<Question />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
