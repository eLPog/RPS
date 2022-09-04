import './Results.css';
import { useContext } from 'react';
import { GameContext } from '../../context/GameContext';

export function Results() {
  const {
    player1Name, player1Score, player2Name, player2Score,
  } = useContext(GameContext);
  return (
    <div className="results">
      <span className="result-score">
        {player1Name}
        {' '}
        score:
        {' '}
        {player1Score}
      </span>
      <span className="result-score">
        {' '}
        {player2Name}
        {' '}
        score:
        {' '}
        {player2Score}
      </span>
    </div>
  );
}
