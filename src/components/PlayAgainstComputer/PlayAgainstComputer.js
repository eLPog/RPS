import { SelectWall } from '../SelectWall/SelectWall';
import { choices } from '../../assets/database/choices';

export function PlayAgainstComputer(props) {
  return (
    <div className="selections">
      <div>
        <label htmlFor="computer">Computer</label>
        <input className="computer" placeholder="computer" required id="computer" disabled />
      </div>
      <span className="playerName selected">Computer</span>
    </div>
  );
}
