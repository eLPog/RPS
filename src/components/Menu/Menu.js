import './Menu.css';
import { useState } from 'react';

export function Menu() {
  const [showMenu, setShowMenu] = useState(false);
  function showMenuHandler() {
    showMenu ? setShowMenu(false) : setShowMenu(true);
  }
  return (
    <nav className="menu">
      <input type="checkbox" id="menuToggle" />
      <label htmlFor="menuToggle" className="menuButtonContainer">
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <div className="menuButton" onClick={showMenuHandler} />
      </label>
      {showMenu && (
      <ul className="list">
        <li>
          Set new names
        </li>
        <li>
          reset history
        </li>
      </ul>
      )}

    </nav>
  );
}
