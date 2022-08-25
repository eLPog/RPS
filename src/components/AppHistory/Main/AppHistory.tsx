import './AppHistory.css';
import { Link } from 'react-router-dom';
import { Button } from '../../commons/Button/Button';
import { RightSide } from '../RightSide/RightSide';
import { LeftSide } from '../LeftSide/LeftSide';

export function AppHistory() {
  return (
    <div className="timeline__container">
      <div className="timeline">
        <RightSide
          date="August 2022"
          version="version 1.0.0"
          content="The first version of the application. It allowed the selection of 3 standard characters and the game of two people"
        />
        <LeftSide
          version="version 1.1.0"
          date="August 2022"
          content="The ability to play against the computer
          has been added. The computer chooses its character randomly using the Math.random () method."
        />
        <RightSide
          date="August 2022"
          version="version 1.2.0"
          content="A major modification that adds two new signs: Lizard and Spoke.
            This increased the attractiveness of the game, from now on each character beats two others."
        />
      </div>
      <div className="button__bottom">
        <Link to="/">
          <Button text="Home" customStyle="buttom__bottom" />
        </Link>
      </div>
    </div>
  );
}
