import './Instruction.css';
import { Link } from 'react-router-dom';
import photo from '../../assets/graph/gameInstruction.jpg';
import { Button } from '../commons/Button/Button';

export function Instruction() {
  return (
    <div className="instructionContainer">
      <h2>How to play</h2>
      <ul className="instructions list1">
        <li>
          You can play against the computer or the other person
        </li>
        <li>
          If you are playing against another person, your choice is made on the same screen so when choosing the first player, the second cannot look
        </li>
        <li>
          Before starting the game, please provide your name (names) and push save button.
        </li>
        <li>
          After selecting the characters, press the play button, the result will be shown on the board and added to the game history.
        </li>
        <li>
          Players names and history are saved in the browser. You can remove this by using the new game and reset history buttons.
        </li>
      </ul>
      <img src={photo} alt="graphic instruction how to play" />
      <ul className="instructions list2">
        <h3>Who wins???</h3>
        <li>
          Scissors cut paper and decapitate lizard
        </li>
        <li>
          Paper covers rock and disproves Spock
        </li>
        <li>
          Rock crushes lizard and scissors
        </li>
        <li>
          Lizard poisons Spock and eats paper
        </li>
        <li>
          Spock smashes scissors and vaporizes rock
        </li>
      </ul>
      <div className="backButton">
        <Link to="/">
          <Button text="Back" />
        </Link>
      </div>
    </div>
  );
}
