import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HamburgerMenu } from './HamburgerMenu';

describe('Check if  Hamburger menu is correctly rendered', () => {
  test('check if div container is correctly rendered if hamburger menu is active', () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={(
              <HamburgerMenu
                hamburgerMenuActive
                menuHandler={() => {}}
                roundFinished={false}
                handleKeyDown={() => {}}
                playAgainstComputer={false}
                playWithComputer={() => {}}
                deleteNames={() => {}}
                resetHistory={() => {}}
              />
)}
          />

        </Routes>
      </BrowserRouter>,
    );
    const [container] = document.getElementsByClassName('hamburger__menu');
    expect(container).toBeTruthy();
    expect(container).toContainHTML('div');
  });
  test('check if hamburger menu is hide if is not active', () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={(
              <HamburgerMenu
                hamburgerMenuActive={false}
                menuHandler={() => {}}
                roundFinished={false}
                handleKeyDown={() => {}}
                playAgainstComputer={false}
                playWithComputer={() => {}}
                deleteNames={() => {}}
                resetHistory={() => {}}
              />
                )}
          />

        </Routes>
      </BrowserRouter>,
    );
    const [activeMenuContainer] = document.getElementsByClassName('hamburger__menu--active');
    expect(activeMenuContainer).toBeFalsy();
  });
});
