import { Button } from '../commons/Button/Button';
import { Selections } from '../Selections/Selections';
import './SelectWall.css';

export function SelectWall(props) {
  return (
    <>
      <div className={`selectWall ${props.roundFinished && 'blocked'}`}>
        <Selections
          player="Player 1"
          namesAdded={props.namesAdded}
          playerNameHandler={props.player1NameHandler}
          playerChoice={props.player1Choice}
          playerName={props.player1Name}
          playerChoiceHandler={props.player1ChoiceHandler}
        />
        <Selections
          player="player2"
          namesAdded={props.namesAdded}
          playerNameHandler={props.player2NameHandler}
          playerChoice={props.player2Choice}
          playerName={props.player2Name}
          playerChoiceHandler={props.player2ChoiceHandler}
        />

      </div>
      <div className="saveButton">
        {props.player1Name && props.player2Name && !props.namesAdded ? <Button text="SAVE" onClick={props.namesAddedHandler} /> : null}
      </div>
    </>
  );
}