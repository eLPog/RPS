import './Results.css';

export function Results(props:{
    player1Name:string,
    player1Score:number,
    player2Name:string,
    player2Score:number
}) {
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
