import './HamburgerMenu.css';
import { Link } from 'react-router-dom';
import { Button } from '../commons/Button/Button';

export function HamburgerMenu(props) {
  return (
    <>
      <Button
        text={props.hamburgerMenuActive ? 'X' : '≡'}
        onClick={props.menuHandler}
        customStyle={`hamburger__button ${(props.hamburgerMenuActive && !props.roundFinished) ? 'hamburger__button--active' : ''}`}
        disabled={props.roundFinished}
      />
      <div
        role="button"
        tabIndex={0}
        onKeyDown={escape}
        className={`hamburger__menu  ${(props.hamburgerMenuActive && !props.roundFinished) ?
          'hamburger__menu--active' : ''}`}
        onClick={props.menuHandler}
      >
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
