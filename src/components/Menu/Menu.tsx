import './Menu.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Button } from '../commons/Button/Button';
import { GameContext } from '../../context/GameContext';

export function Menu() {
  const {
    roundFinished, playAgainstComputer, playWithComputer, deletePlayersNames, resetHistory,
  } = useContext(GameContext);
  return (

    <nav className="menu">
      <Link to="/instruction">
        <Button text="Instruction" disabled={roundFinished} />
      </Link>
      <Button
        text={!playAgainstComputer ? 'Play with computer' : 'Play with human'}
        onClick={playWithComputer}
        disabled={roundFinished}
      />
      <Button text="New Game" onClick={deletePlayersNames} disabled={roundFinished} />
      <Button text="Reset history" onClick={resetHistory} disabled={roundFinished} />
      <Link to="/versions">
        <Button text="App history" disabled={roundFinished} />
      </Link>
    </nav>
  );
}
