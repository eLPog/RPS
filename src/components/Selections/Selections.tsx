import React from 'react';
import { choices } from '../../assets/database/choices';
import './Selection.css';

export function Selections(props:{
    playAgainstComputer?:boolean,
    namesAdded:boolean,
    player:string,
    playerNameHandler:(e:React.ChangeEvent<HTMLInputElement>)=>void,
    playerChoice:string,
    playerName:string,
    playerChoiceHandler:((choice:string)=>void)
}) {
  return (
    !props.playAgainstComputer ? (
      <div className="selections">
        {!props.namesAdded ? (
          <div>
            <label htmlFor="player1Name">{props.player}</label>
            <input className="player" placeholder="name" required id="player1Name" onChange={props.playerNameHandler} />
          </div>
        ) : null}

        <span className={`playerName ${props.playerChoice && 'selected'}`}>{props.playerName}</span>
        <div className="signsContainer">
          {choices.map((el) => (
            <button
              className="selection"
              key={el.id}
              onClick={() => props.playerChoiceHandler(el.emoji)}
              disabled={!props.namesAdded}
            >
              {el.emoji}
            </button>
          ))}
        </div>
      </div>
    ) : (
      <div className="selections">

        <span className={`playerName ${props.playerChoice && 'selected'}`}>{props.playerName}</span>
        <div className="signsContainer">
          <button className="selection computer" disabled>❓</button>
        </div>
      </div>
    )

  );
}
