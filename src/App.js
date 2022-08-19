import './App.css';
import { useState } from 'react';

function App() {
  const [player1Name, setPlayer1Name] = useState(null);
  const [player2Name, setPlayer2Name] = useState(null);

  const player1NameHandler = (e) => setPlayer1Name(e.target.value);
  const player2NameHandler = (e) => setPlayer2Name(e.target.value);

  return (
    <div className="App">
      <main>
        {/* <div className="namesInput"> */}
        {/*  <label htmlFor="player1Name">Player 1 name</label> */}
        {/*  <input className="player" id="player1Name" onChange={player1NameHandler} /> */}

        {/*  <label htmlFor="player1Name">Player 2 name</label> */}
        {/*  <input className="player" id="player2Name" onChange={player2NameHandler} /> */}

        {/* </div> */}
        <div className="selectWall">

          <div className="selections">
            <div>
              <label htmlFor="player1Name">Player 1 name</label>
              <input className="player" id="player1Name" onChange={player1NameHandler} />
            </div>
            <span className="playerName">{player1Name}</span>
            <button className="selection" data-selection="scissors">✌</button>
            <button className="selection" data-selection="rock">👊</button>
            <button className="selection" data-selection="paper">✋</button>
          </div>
          <div className="selections">
            <div>
              <label htmlFor="player1Name">Player 2 name</label>
              <input className="player" id="player2Name" onChange={player2NameHandler} />
            </div>
            <span className="playerName">{player2Name}</span>
            <button className="selection" data-selection="scissors">✌</button>
            <button className="selection" data-selection="rock">👊</button>
            <button className="selection" data-selection="paper">✋</button>
          </div>
        </div>
        <div className="results">
          <div>
            <span className="result-score">0</span>
          </div>
          <div>
            <span className="result-score">0</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
