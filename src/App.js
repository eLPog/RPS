import './App.css';
import { useState } from 'react';
import { Button } from './components/commons/Button/Button';

function App() {
  const choices = [{
    name: 'scissors',
    emoji: '✌',
    beat: 'paper',
    id: 1,
  }, {
    name: 'rock',
    emoji: '👊',
    beat: 'scissors',
    id: 2,

  }, {
    name: 'paper',
    emoji: '✋',
    beat: 'rock',
    id: 3,

  }];
  const [player1Name, setPlayer1Name] = useState(null);
  const [player2Name, setPlayer2Name] = useState(null);
  const [player1Choice, setPlayer1Choice] = useState(null);
  const [player2Choice, setPlayer2Choice] = useState(null);
  const [winner, setWinner] = useState(null);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [roundFinished, setRoundFinished] = useState(false);
  const [resultsHistory, setResultsHistory] = useState([]);
  const [gameNumber, setGameNumber] = useState(1);
  const [lastGame, setLastGame] = useState(null);

  const player1NameHandler = (e) => setPlayer1Name(e.target.value);
  const player2NameHandler = (e) => setPlayer2Name(e.target.value);

  const player1ChoiceHandler = (value) => {
    setPlayer1Choice(value);
  };
  const player2ChoiceHandler = (value) => {
    setPlayer2Choice(value);
  };
  function newGame() {
    setRoundFinished(false);
  }
  function checkWinner(choicePlayer1, choicePlayer2) {
    const player1 = choices.find((el) => el.emoji === choicePlayer1);
    const player2 = choices.find((el) => el.emoji === choicePlayer2);
    const gameStats = {
      winner: null,
      selectedSignPlayer1: player1Choice,
      selectedSignPlayer2: player2Choice,
      gameID: Math.floor(Math.random() * 10000),
      gameNumber,
    };
    if (player1.beat === player2.name) {
      setWinner(player1Name);
      setPlayer1Score(((prevState) => prevState + 1));
      gameStats.winner = player1Name;
    }
    if (player2.beat === player1.name) {
      setWinner(player2Name);
      setPlayer2Score(((prevState) => prevState + 1));
      gameStats.winner = player2Name;
    }
    if (player1.name === player2.name) {
      setWinner('Draw');
      gameStats.winner = 'draw';
    }
    resultsHistory.push(gameStats);
    setLastGame({
      player1: gameStats.selectedSignPlayer1,
      player2: gameStats.selectedSignPlayer2,
    });
    setResultsHistory((prevState) => prevState);
    setGameNumber((prevState) => prevState + 1);
    setRoundFinished(true);
    setPlayer1Choice(null);
    setPlayer2Choice(null);
  }

  return (
    <div className="App">
      <main>
        <div className="selectWall">

          <div className="selections">
            {!player1Name ? (
              <div>
                <label htmlFor="player1Name">Player 1 name</label>
                <input className="player" id="player1Name" onChange={player1NameHandler} />
              </div>
            ) : null}
            <span className="playerName">{player1Name}</span>
            {choices.map((el) => <button className="selection" key={el.id} onClick={() => player1ChoiceHandler(el.emoji)}>{el.emoji}</button>)}
          </div>
          <div className="selections">
            {!player2Name ? (
              <div>
                <label htmlFor="player1Name">Player 2 name</label>
                <input className="player" id="player2Name" onChange={player2NameHandler} />
              </div>
            ) : null}

            <span className="playerName">{player2Name}</span>
            {choices.map((el) => <button className="selection" key={el.id} onClick={() => player2ChoiceHandler(el.emoji)}>{el.emoji}</button>)}
          </div>
        </div>
        {player1Name && player2Name ? (
          <>
            <div className="playZone">
              {!roundFinished && (!player1Choice || !player2Choice) ? (
                <>
                  {' '}
                  <span className="nameToSelect">
                    {player1Choice ? player2Name : player1Name}
                  </span>
                  <span className="instruction">
                    select your sign
                  </span>
                </>
              ) : null }

              {player1Choice && player2Choice ?
                <Button text="Play" onClick={() => checkWinner(player1Choice, player2Choice)} /> : null}
              {roundFinished && (
              <>
                <span className="versus">
                  {lastGame.player1}
                  {' '}
                  vs.
                  {lastGame.player2}
                </span>
                <h2 className="winnerName">
                  The winner is
                  {' '}
                  <span className="winner">{winner}</span>
                </h2>
                <Button text="Next game" onClick={newGame} />
              </>

              )}

            </div>
            <div className="results">
              <span className="result-score">
                {player1Name}
                {' '}
                score:
                {' '}
                {player1Score}
              </span>
              <span className="result-score">
                {' '}
                {player2Name}
                {' '}
                score:
                {' '}
                {player2Score}
              </span>
            </div>
            <div className="history">
              <ul className="historyList">
                {resultsHistory.map((el) => (
                  <li key={el.gameID}>
                    Game number:
                    {' '}
                    {el.gameNumber}
                    ,
                    Winner:
                    {' '}
                    {el.winner}
                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : null}

      </main>
    </div>
  );
}

export default App;
