import './App.css';
import React, { useCallback, useEffect, useState } from 'react';
import { Results } from './components/Results/Results';
import { History } from './components/History/History';
import { PlayZone } from './components/PlayZone/PlayZone';
import { SelectWall } from './components/SelectWall/SelectWall';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { HamburgerMenu } from './components/HamburgerMenu/HamburgerMenu';
import { choices } from './assets/database/choices';
import { GameStatsInterface, LastGameInterface } from './interface/Interfaces';

function App() {
  const [player1Name, setPlayer1Name] = useState<string>('');
  const [player2Name, setPlayer2Name] = useState<string>('');
  const [player1Choice, setPlayer1Choice] = useState<string>('');
  const [player2Choice, setPlayer2Choice] = useState<string>('');
  const [winner, setWinner] = useState<string>('');
  const [player1Score, setPlayer1Score] = useState<number>(0);
  const [player2Score, setPlayer2Score] = useState<number>(0);
  const [roundFinished, setRoundFinished] = useState<boolean>(false);
  const [resultsHistory, setResultsHistory] = useState<GameStatsInterface[]>([]);
  const [gameNumber, setGameNumber] = useState<number>(1);
  const [lastGame, setLastGame] = useState<LastGameInterface>({ player1: '', player2: '' });
  const [namesAdded, setNamesAdded] = useState<boolean>(false);
  const [playAgainstComputer, setPlayAgainstComputer] = useState<boolean>(false);
  const [computerSign, setComputerSign] = useState<string>('');
  const [hamburgerMenuActive, setHamburgerMenuActive] = useState<boolean>(false);

  const menuHandler = useCallback(() => {
    hamburgerMenuActive ? setHamburgerMenuActive(false) : setHamburgerMenuActive(true);
  }, [hamburgerMenuActive]);
  const closeHamburgerMenu = useCallback(() => {
    setHamburgerMenuActive(false);
  }, []);

  const player1NameHandler = (e:React.ChangeEvent<HTMLInputElement>) => setPlayer1Name(e.target.value);
  const player2NameHandler = (e:React.ChangeEvent<HTMLInputElement>) => setPlayer2Name(e.target.value);

  const namesAddedHandler = useCallback(() => {
    setNamesAdded(true);
    localStorage.setItem('players', JSON.stringify({ player1: player1Name, player2: player2Name }));
  }, [player1Name, player2Name]);

  const deletePlayersNames = () => {
    setPlayer1Name('');
    setPlayer2Name('');
    setPlayer1Score(0);
    setPlayer2Score(0);
    setNamesAdded(false);
    setResultsHistory([]);
    setGameNumber(1);
    setPlayAgainstComputer(false);
    localStorage.clear();
  };
  const resetHistory = () => {
    setPlayer1Score(0);
    setPlayer2Score(0);
    setResultsHistory([]);
    setGameNumber(1);
    localStorage.removeItem('history');
  };

  useEffect(() => {
    const playersNames = JSON.parse(localStorage.getItem('players') as string);
    if (playersNames) {
      setPlayer1Name(playersNames.player1);
      setPlayer2Name(playersNames.player2);
      setNamesAdded(true);
    }
    const gamesHistory:GameStatsInterface[] = JSON.parse(localStorage.getItem('history')as string);
    if (gamesHistory) {
      setResultsHistory(gamesHistory);
      setGameNumber(gamesHistory.length + 1);
    }
  }, []);
  const player1ChoiceHandler = (value:string) => {
    if (roundFinished) {
      return;
    }
    setPlayer1Choice(value);
  };
  const player2ChoiceHandler = (value:string) => {
    if (roundFinished) {
      return;
    }
    setPlayer2Choice(value);
  };
  const newGame = useCallback(() => {
    if (playAgainstComputer) {
      setComputerSign(choices[Math.floor(Math.random() * choices.length)].emoji);
    }
    setRoundFinished(false);
  }, [playAgainstComputer, roundFinished]);

  const playWithComputer = () => {
    if (playAgainstComputer) {
      setPlayAgainstComputer(false);
      setPlayer2Name('');
      setNamesAdded(false);
      resetHistory();
      return;
    }
    setPlayAgainstComputer(true);
    setPlayer2Name('Computer');
    setComputerSign(choices[Math.floor(Math.random() * choices.length)].emoji);
    resetHistory();
  };

  const checkWinner = (choicePlayer1:string, choicePlayer2:string) => {
    const player1 = choices.find((el) => el.emoji === choicePlayer1);
    const player2 = !playAgainstComputer ? choices.find((el) => el.emoji === choicePlayer2) : choices.find((el) => el.emoji === computerSign);
    const gameStats = {
      winner: '',
      selectedSignPlayer1: player1Choice,
      selectedSignPlayer2: !playAgainstComputer ? player2Choice : computerSign,
      gameID: Math.floor(Math.random() * 10000),
      gameNumber,
      dateOfPlay: `${new Date().toLocaleDateString()} ${new Date().getHours()}:${new Date().getMinutes()}`,
    };
    if (player1 !== undefined && player2 !== undefined) {
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
    }
    setResultsHistory((prevState) => prevState);
    localStorage.setItem('history', JSON.stringify(resultsHistory));
    setGameNumber((prevState) => prevState + 1);
    setRoundFinished(true);
    setPlayer1Choice('');
    setPlayer2Choice('');
  };

  /*
  function created because react requires ON KEY DOWN for a clickable element
  that has no semantic role. In this case it is a DIV. !Only for tipping and react semantics.
   */
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // ;
  };
  return (
    <>
      <HamburgerMenu
        deleteNames={deletePlayersNames}
        resetHistory={resetHistory}
        playAgainstComputer={playAgainstComputer}
        playWithComputer={playWithComputer}
        roundFinished={roundFinished}
        menuHandler={menuHandler}
        hamburgerMenuActive={hamburgerMenuActive}
        handleKeyDown={handleKeyDown}

      />

      <div role="button" tabIndex={0} onKeyDown={handleKeyDown} className="mainAppContainer" onClick={closeHamburgerMenu}>
        <Header
          deleteNames={deletePlayersNames}
          resetHistory={resetHistory}
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
      </div>
    </>
  );
}

export default App;
