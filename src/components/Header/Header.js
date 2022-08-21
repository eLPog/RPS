import './Header.css';
import { Menu } from '../Menu/Menu';

export function Header(props) {
  return (
    <header className="header">
      <h2 className="title">Rock Paper Scissors Lizard Spoke</h2>
      <Menu
        deleteNames={props.deleteNames}
        resetHistory={props.resetHistory}
        namesAdded={props.namesAdded}
        playAgainstComputer={props.playAgainstComputer}
        playWithComputer={props.playWithComputer}
        roundFinished={props.roundFinished}
      />

    </header>
  );
}
