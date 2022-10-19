import './Footer.css';
import React from 'react';

function Footer() {
  console.log('footer render');
  return (
    <footer className="footer">
      <div className="author">

        <h4>
          Created by
          <a href="https://www.github.com/elPog" target="_blank" rel="noreferrer"> eLPog</a>
        </h4>

      </div>
      <h4>
        2022
      </h4>
    </footer>
  );
}
export default React.memo(Footer);
