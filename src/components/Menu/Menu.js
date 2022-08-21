import './Menu.css';
import { Button } from '../commons/Button/Button';

export function Menu(props) {
  return (
    <nav className="menu">
      <Button
        text={!props.playAgainstComputer ? 'Play with computer' : 'Play with human'}
        onClick={props.playWithComputer}
        disabled={props.roundFinished}
      />
      <Button text="New Game" onClick={props.deleteNames} disabled={props.roundFinished} />
      <Button text="Reset history" onClick={props.resetHistory} disabled={props.roundFinished} />
    </nav>

  );
}
