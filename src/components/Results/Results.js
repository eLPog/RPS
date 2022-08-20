export function Results(props) {
  return (
    <div className="results">
      <span className="result-score">
        {props.player1Name}
        {' '}
        score:
        {' '}
        {props.player1Score}
      </span>
      <span className="result-score">
        {' '}
        {props.player2Name}
        {' '}
        score:
        {' '}
        {props.player2Score}
      </span>
    </div>
  );
}
