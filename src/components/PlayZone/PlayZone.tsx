import { useContext } from 'react';
import { Button } from '../commons/Button/Button';
import './PlayZone.css';
import { LastGameInterface } from '../../interface/Interfaces';
import { GameContext } from '../../context/GameContext';

export function PlayZone(props:{
  player1Choice:string,
  player2Choice:string,
  checkWinner:(p1choice:string, p2choice:string)=>void,
  lastGame:LastGameInterface,
  newGame:()=>void

}) {
  const { roundFinished, playAgainstComputer, winner } = useContext(GameContext);
  return (
    <div className="playZone">
      {!roundFinished && (!props.player1Choice || !props.player2Choice) ? (
        <span>
          Select your signs
        </span>
      ) : null }

      {(props.player1Choice && props.player2Choice) || (props.player1Choice && playAgainstComputer) ?
        <Button text="Play" onClick={() => props.checkWinner(props.player1Choice, props.player2Choice)} /> : null}
      {roundFinished && (
        <>
          <span>
            {props.lastGame.player1}
            {' '}
            vs.
            {props.lastGame.player2}
          </span>
          <h2 className="winnerName">
            The winner is
            {' '}
            <span className="winner">{winner}</span>
          </h2>
          <Button text="Next game" onClick={props.newGame} />
        </>

      )}

    </div>
  );
}
