import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { choices } from './assets/database/choices';
import { Results } from './components/Results/Results';
import { History } from './components/History/History';
import { PlayZone } from './components/PlayZone/PlayZone';
import { SelectWall } from './components/SelectWall/SelectWall';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Instruction } from './components/Instruction/Instruction';

function App() {
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
  const [namesAdded, setNamesAdded] = useState(false);
  const [playAgainstComputer, setPlayAgainstComputer] = useState(false);
  const [computerSign, setComputerSign] = useState(null);

  const player1NameHandler = (e) => setPlayer1Name(e.target.value);
  const player2NameHandler = (e) => setPlayer2Name(e.target.value);
  const namesAddedHandler = () => {
    setNamesAdded(true);
    localStorage.setItem('players', JSON.stringify({ player1: player1Name, player2: player2Name }));
  };
  function deletePlayersNames() {
    setPlayer1Name(null);
    setPlayer2Name(null);
    setPlayer1Score(0);
    setPlayer2Score(0);
    setNamesAdded(false);
    setResultsHistory([]);
    setGameNumber(1);
    setPlayAgainstComputer(false);
    localStorage.clear();
  }
  function resetHistory() {
    setPlayer1Score(0);
    setPlayer2Score(0);
    setResultsHistory([]);
    setGameNumber(1);
    localStorage.removeItem('history');
  }

  useEffect(() => {
    let playersNames = localStorage.getItem('players');
    playersNames = JSON.parse(playersNames);
    if (playersNames) {
      setPlayer1Name(playersNames.player1);
      setPlayer2Name(playersNames.player2);
      setNamesAdded(true);
    }
    let gamesHistory = localStorage.getItem('history');
    gamesHistory = JSON.parse(gamesHistory);
    if (gamesHistory) {
      setResultsHistory(gamesHistory);
      setGameNumber(gamesHistory.length + 1);
    }
  }, []);
  const player1ChoiceHandler = (value) => {
    if (roundFinished) {
      return;
    }
    setPlayer1Choice(value);
  };
  const player2ChoiceHandler = (value) => {
    if (roundFinished) {
      return;
    }
    setPlayer2Choice(value);
  };
  function newGame() {
    if (playAgainstComputer) {
      setComputerSign(choices[Math.floor(Math.random() * choices.length)].emoji);
    }
    setRoundFinished(false);
  }

  function playWithComputer() {
    if (playAgainstComputer) {
      setPlayAgainstComputer(false);
      setPlayer2Name(null);
      setNamesAdded(false);
      resetHistory();
      return;
    }
    setPlayAgainstComputer(true);
    setPlayer2Name('Computer');
    setComputerSign(choices[Math.floor(Math.random() * choices.length)].emoji);
    resetHistory();
  }

  function checkWinner(choicePlayer1, choicePlayer2) {
    const player1 = choices.find((el) => el.emoji === choicePlayer1);
    const player2 = !playAgainstComputer ? choices.find((el) => el.emoji === choicePlayer2) : choices.find((el) => el.emoji === computerSign);
    const gameStats = {
      winner: null,
      selectedSignPlayer1: player1Choice,
      selectedSignPlayer2: !playAgainstComputer ? player2Choice : computerSign,
      gameID: Math.floor(Math.random() * 10000),
      gameNumber,
      dateOfPlay: `${new Date().toLocaleDateString()} ${new Date().getHours()}:${new Date().getMinutes()}`,
    };
    if (player1.beat[0] === player2.name || player1.beat[1] === player2.name) {
      setWinner(player1Name);
      setPlayer1Score(((prevState) => prevState + 1));
      gameStats.winner = player1Name;
    }
    if (player2.beat[0] === player1.name || player2.beat[1] === player1.name) {
      setWinner(player2Name);
      setPlayer2Score(((prevState) => prevState + 1));
      gameStats.winner = player2Name;
    }
    if (player1.name === player2.name) {
      setWinner('Draw');
      gameStats.winner = 'draw';
    }
    resultsHistory.unshift(gameStats);
    setLastGame({
      player1: gameStats.selectedSignPlayer1,
      player2: gameStats.selectedSignPlayer2,
    });
    setResultsHistory((prevState) => prevState);
    localStorage.setItem('history', JSON.stringify(resultsHistory));
    setGameNumber((prevState) => prevState + 1);
    setRoundFinished(true);
    setPlayer1Choice(null);
    setPlayer2Choice(null);
  }

  return (
    <>

      <Header
        deleteNames={deletePlayersNames}
        resetHistory={resetHistory}
        namesAdded={namesAdded}
        playAgainstComputer={playAgainstComputer}
        playWithComputer={playWithComputer}
        roundFinished={roundFinished}
      />
      <main>
        <SelectWall
          playAgainstComputer={playAgainstComputer}
          roundFinished={roundFinished}
          namesAdded={namesAdded}
          player1Choice={player1Choice}
          player2Choice={player2Choice}
          player1Name={player1Name}
          player2Name={player2Name}
          player1ChoiceHandler={player1ChoiceHandler}
          player2ChoiceHandler={player2ChoiceHandler}
          player1NameHandler={player1NameHandler}
          player2NameHandler={player2NameHandler}
          namesAddedHandler={namesAddedHandler}
        />
        {namesAdded ? (
          <>
            <PlayZone
              roundFinished={roundFinished}
              player1Choice={player1Choice}
              player2Choice={player2Choice}
              lastGame={lastGame}
              winner={winner}
              newGame={newGame}
              checkWinner={checkWinner}
              playAgainstComputer={playAgainstComputer}
            />
            <Results player1Name={player1Name} player2Name={player2Name} player1Score={player1Score} player2Score={player2Score} />
            <History resultsHistory={resultsHistory} />
          </>
        ) : null}
      </main>
      <Footer />
    </>
  );
}

export default App;
