import './HamburgerMenu.css';
import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { Button } from '../commons/Button/Button';
import { GameContext } from '../../context/GameContext';

export function HamburgerMenu(props:{hamburgerMenuActive:boolean, menuHandler:()=>void,
    handleKeyDown:(event: React.KeyboardEvent<HTMLInputElement>)=>void}) {
  const {
    deletePlayersNames, resetHistory, playWithComputer, playAgainstComputer, roundFinished,
  } = useContext(GameContext);

  return (
    <>
      <Button
        text={props.hamburgerMenuActive ? 'X' : '≡'}
        onClick={props.menuHandler}
        customStyle={`hamburger__button ${(props.hamburgerMenuActive && !roundFinished) ? 'hamburger__button--active' : ''}`}
        disabled={roundFinished}
      />
      <div
        role="button"
        tabIndex={0}
        onKeyDown={props.handleKeyDown}
        className={`hamburger__menu  ${(props.hamburgerMenuActive && !roundFinished) ?
          'hamburger__menu--active' : ''}`}
        onClick={props.menuHandler}
      >
        <Link to="/instruction" className="link__container">
          <Button
            text="Instruction"
            disabled={roundFinished}
            customStyle="hamburger__menu__button"
          />
        </Link>
        <Button
          text={!playAgainstComputer ? 'Play with computer' : 'Play with human'}
          customStyle="hamburger__menu__button"
          onClick={playWithComputer}
          disabled={roundFinished}
        />
        <Button text="New Game" onClick={deletePlayersNames} disabled={roundFinished} customStyle="hamburger__menu__button" />
        <Button text="Reset history" onClick={resetHistory} disabled={roundFinished} customStyle="hamburger__menu__button" />
        <Link to="/versions" className="link__container">
          <Button text="App history" disabled={roundFinished} customStyle="hamburger__menu__button" />
        </Link>
      </div>
    </>
  );
}
