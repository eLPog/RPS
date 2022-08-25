import './Header.css';
import { Menu } from '../Menu/Menu';

export function Header(props:{
    deleteNames:()=>void,
    resetHistory:()=>void,
    playAgainstComputer:boolean,
    playWithComputer:()=>void,
    roundFinished:boolean
}) {
  return (
    <header className="header">
      <h2 className="title">Rock Paper Scissors Lizard Spoke</h2>
      <Menu
        deleteNames={props.deleteNames}
        resetHistory={props.resetHistory}
        playAgainstComputer={props.playAgainstComputer}
        playWithComputer={props.playWithComputer}
        roundFinished={props.roundFinished}
      />

    </header>
  );
}
