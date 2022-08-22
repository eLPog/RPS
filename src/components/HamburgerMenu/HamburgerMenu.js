import './HamburgerMenu.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../commons/Button/Button';

export function HamburgerMenu(props) {
  const [hamburgerMenuActive, setHamburgerMenuActive] = useState(false);
  const menuHandler = () => {
    hamburgerMenuActive ? setHamburgerMenuActive(false) : setHamburgerMenuActive(true);
  };
  return (
    <>
      <Button
        text="?"
        onClick={menuHandler}
        customStyle={`hamburger__button ${(hamburgerMenuActive && !props.roundFinished) ? 'hamburger__button--active' : ''}`}
        disabled={props.roundFinished}
      />
      <div className={`hamburger__menu  ${(hamburgerMenuActive && !props.roundFinished) ? 'hamburger__menu--active' : ''}`}>
        <Link to="/instruction" className="link__container">
          <Button
            text="Instruction"
            disabled={props.roundFinished}
            customStyle="hamburger__menu__button"
          />
        </Link>
        <Button
          text={!props.playAgainstComputer ? 'Play with computer' : 'Play with human'}
          customStyle="hamburger__menu__button"
          onClick={props.playWithComputer}
          disabled={props.roundFinished}
        />
        <Button text="New Game" onClick={props.deleteNames} disabled={props.roundFinished} customStyle="hamburger__menu__button" />
        <Button text="Reset history" onClick={props.resetHistory} disabled={props.roundFinished} customStyle="hamburger__menu__button" />
        <Link to="/versions" className="link__container">
          <Button text="App history" disabled={props.roundFinished} customStyle="hamburger__menu__button" />
        </Link>
      </div>
    </>
  );
}
