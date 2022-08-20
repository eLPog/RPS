import './History.css';

export function History(props) {
  return (
    <div className="history">
      <ul className="historyList">
        {props.resultsHistory.map((el) => (
          <li key={el.gameID}>
            <span className="gameNo">
              Game no.
              {' '}
              {el.gameNumber}
            </span>
            <span className="winnerName">
              {el.winner}
            </span>
            {el.dateOfPlay}
          </li>
        ))}
      </ul>
    </div>
  );
}
