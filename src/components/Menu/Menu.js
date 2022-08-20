import './Menu.css';
import { Button } from '../commons/Button/Button';

export function Menu(props) {
  return (
    props.namesAdded && (
    <nav className="menu">
      <Button text="New Players" onClick={props.deleteNames} />
      <Button text="Reset history" onClick={props.resetHistory} />
    </nav>
    )

  );
}
