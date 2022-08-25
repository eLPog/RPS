import './Menu.css';
import { Link } from 'react-router-dom';
import { Button } from '../commons/Button/Button';

export function Menu(props:{
  roundFinished:boolean,
  playAgainstComputer:boolean,
  playWithComputer:()=>void,
  deleteNames:()=>void,
  resetHistory:()=>void,
}) {
  return (

    <nav className="menu">
      <Link to="/instruction">
        <Button text="Instruction" disabled={props.roundFinished} />
      </Link>
      <Button
        text={!props.playAgainstComputer ? 'Play with computer' : 'Play with human'}
        onClick={props.playWithComputer}
        disabled={props.roundFinished}
      />
      <Button text="New Game" onClick={props.deleteNames} disabled={props.roundFinished} />
      <Button text="Reset history" onClick={props.resetHistory} disabled={props.roundFinished} />
      <Link to="/versions">
        <Button text="App history" disabled={props.roundFinished} />
      </Link>
    </nav>
  );
}
