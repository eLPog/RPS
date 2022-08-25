import './History.css';
import { GameStatsInterface } from '../../interface/Interfaces';

export function History(props:{
    resultsHistory:GameStatsInterface[]
}) {
  return (
    <div className="history">
      <ul className="historyList">
        {props.resultsHistory.map((el:GameStatsInterface) => (
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
