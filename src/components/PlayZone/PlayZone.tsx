import { useContext, useState } from 'react';
import { Button } from '../commons/Button/Button';
import './PlayZone.css';
import { LastGameInterface } from '../../interface/Interfaces';
import { GameContext } from '../../context/GameContext';

export function PlayZone(props:{
  player1Choice:string,
  player2Choice:string,
  checkWinner:(p1choice:string, p2choice:string)=>void,
  lastGame:LastGameInterface,
  newGame:()=>void,
  nextRound:()=>void

}) {
  const {
    roundFinished, playAgainstComputer, winner, player1Score, player2Score, pointsLimit, player1Name, player2Name,
  } = useContext(GameContext);
  const fullGameWinner = player1Score > player2Score ? player1Name : player2Name;
  return (
    <div className="playZone">
      {!roundFinished && (!props.player1Choice || !props.player2Choice) ? (
        <span>
          Select your signs
        </span>
      ) : null }

      {(props.player1Choice && props.player2Choice) || (props.player1Choice && playAgainstComputer) ?
        <Button text="Play" onClick={() => props.checkWinner(props.player1Choice, props.player2Choice)} /> : null}
      {roundFinished && (player1Score < pointsLimit && player2Score < pointsLimit) && (
        <>
          <span>
            {props.lastGame.player1}
            {' '}
            vs.
            {props.lastGame.player2}
          </span>
          <h2 className="winnerName">
            This round winner:
            {' '}
            <span className="winner">{winner}</span>
          </h2>
          <Button text="Next game" onClick={props.newGame} />
        </>

      )}
      {roundFinished && (player1Score >= pointsLimit || player2Score >= pointsLimit) && (
      <div className="gameOverSummary">
        <p>Game over</p>
        <p>
          {props.lastGame.player1}
          {' '}
          vs.
          {props.lastGame.player2}
        </p>
        <p>
          The game winner is:
          <span className="winnerNameSummary">
            {fullGameWinner}
          </span>
        </p>
        <p>
          <Button text="New Game" onClick={props.nextRound} />

        </p>
      </div>
      )}

    </div>
  );
}
