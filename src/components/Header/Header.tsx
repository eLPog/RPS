import './Header.css';
import { Menu } from '../Menu/Menu';

export function Header() {
  return (
    <header className="header">
      <h2 className="title">Rock Paper Scissors Lizard Spoke</h2>
      <Menu />
    </header>
  );
}
