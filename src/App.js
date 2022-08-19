import './App.css';
import { useState } from 'react';

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

  const player1NameHandler = (e) => setPlayer1Name(e.target.value);
  const player2NameHandler = (e) => setPlayer2Name(e.target.value);

  const player1ChoiceHandler = (value) => {
    setPlayer1Choice(value);
  };
  const player2ChoiceHandler = (value) => {
    setPlayer2Choice(value);
  };
  function checkWinner(choicePlayer1, choicePlayer2) {
    const player1 = choices.find((el) => el.emoji === choicePlayer1);
    const player2 = choices.find((el) => el.emoji === choicePlayer2);
    if (player1.beat === player2.name) {
      setWinner(player1Name);
      setPlayer1Score(((prevState) => prevState + 1));
    }
    if (player2.beat === player1.name) {
      setWinner(player2Name);
      setPlayer2Score(((prevState) => prevState + 1));
    }
    if (player1.name === player2.name) {
      setWinner('Draw');
    }
    setPlayer1Choice(null);
    setPlayer2Choice(null);
  }

  return (
    <div className="App">
      <main>
        <div className="selectWall">

          <div className="selections">
            <div>
              <label htmlFor="player1Name">Player 1 name</label>
              <input className="player" id="player1Name" onChange={player1NameHandler} />
            </div>
            <span className="playerName">{player1Name}</span>
            {choices.map((el) => <button className="selection" key={el.id} onClick={() => player1ChoiceHandler(el.emoji)}>{el.emoji}</button>)}
          </div>
          <div className="selections">
            <div>
              <label htmlFor="player1Name">Player 2 name</label>
              <input className="player" id="player2Name" onChange={player2NameHandler} />
            </div>
            <span className="playerName">{player2Name}</span>
            {choices.map((el) => <button className="selection" key={el.id} onClick={() => player2ChoiceHandler(el.emoji)}>{el.emoji}</button>)}
          </div>
        </div>
        <div className="playZone">
          <span className="instruction">
            {player1Choice ? player2Name : player1Name}
            {' '}
            select your sign
          </span>
          {player1Choice && player2Choice ? <button onClick={() => checkWinner(player1Choice, player2Choice)}> Play </button> : null}

          <h2>
            The winner is
            {winner}
          </h2>
        </div>

        <div className="results">
          <div>
            <span className="result-score">
              {player1Name}
              {' '}
              score:
              {' '}
              {player1Score}
            </span>
            <span className="result-score">
              {player1Choice}
              {' '}
            </span>
          </div>
          <div>
            <span className="result-score">
              {' '}
              {player2Name}
              {' '}
              score:
              {' '}
              {player2Score}
            </span>
            <span className="result-score">{player2Choice}</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
