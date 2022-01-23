import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import '../styles/Game.scss';

export const Game = () => {
  const navigate = useNavigate();

  const handleFunFacts = () => {
    navigate('/../fun-facts');
  };

  const handleQuestionGame = () => {
    navigate('/../question-game');
  };

  return (
    <div className="game-container">
      <Button text="Fun Facts" method={ handleFunFacts } />
      <Button text="Question Game" method={ handleQuestionGame } />
    </div>
  );
};
