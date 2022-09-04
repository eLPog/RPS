import React, { useContext } from 'react';
import { Button } from '../commons/Button/Button';
import { Selections } from '../Selections/Selections';
import './SelectWall.css';
import { GameContext } from '../../context/GameContext';

export function SelectWall(props:{
    namesAdded:boolean,
    player1NameHandler:(e:React.ChangeEvent<HTMLInputElement>)=>void,
    player2NameHandler:(e:React.ChangeEvent<HTMLInputElement>)=>void,
    player1ChoiceHandler:(choice:string)=>void,
    player2ChoiceHandler:(choice:string)=>void,
    namesAddedHandler:()=>void

}) {
  const {
    roundFinished, player1Choice, player2Choice, player1Name, player2Name, playAgainstComputer, pointsLimit,
  } = useContext(GameContext);
  return (
    <>
      <div className={`pointsLimitContainer ${roundFinished && 'blocked'}`}>
        <div>
          <p>
            {' '}
            The first player with
            {' '}
            {pointsLimit}
            {' '}
            points wins
          </p>
        </div>
        <div>
          <p>
            Change the point limit
          </p>
        </div>

      </div>
      <div className={`selectWall ${roundFinished && 'blocked'}`}>

        <Selections
          player="Player 1"
          namesAdded={props.namesAdded}
          playerNameHandler={props.player1NameHandler}
          playerChoice={player1Choice}
          playerName={player1Name}
          playerChoiceHandler={props.player1ChoiceHandler}
        />
        <Selections
          playAgainstComputer={playAgainstComputer}
          player="player2"
          namesAdded={props.namesAdded}
          playerNameHandler={props.player2NameHandler}
          playerChoice={player2Choice}
          playerName={player2Name}
          playerChoiceHandler={props.player2ChoiceHandler}
        />

      </div>
      <div className="saveButton">
        {player1Name && player2Name && !props.namesAdded ? <Button text="SAVE" onClick={props.namesAddedHandler} /> : null}
      </div>
    </>
  );
}
