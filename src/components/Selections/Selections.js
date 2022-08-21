import { choices } from '../../assets/database/choices';
import './Selection.css';

export function Selections(props) {
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
      <div>
        You play now against computer. Please choose your sign and push play button
      </div>
    )

  );
}
