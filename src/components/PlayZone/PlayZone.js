import { Button } from '../commons/Button/Button';

export function PlayZone(props) {
  return (
    <div className="playZone">
      {!props.roundFinished && (!props.player1Choice || !props.player2Choice) ? (
        <>
          <span className="instruction">
            Select your signs
          </span>
        </>
      ) : null }

      {props.player1Choice && props.player2Choice ?
        <Button text="Play" onClick={() => props.checkWinner(props.player1Choice, props.player2Choice)} /> : null}
      {props.roundFinished && (
        <>
          <span className="versus">
            {props.lastGame.player1}
            {' '}
            vs.
            {props.lastGame.player2}
          </span>
          <h2 className="winnerName">
            The winner is
            {' '}
            <span className="winner">{props.winner}</span>
          </h2>
          <Button text="Next game" onClick={props.newGame} />
        </>

      )}

    </div>
  );
}
