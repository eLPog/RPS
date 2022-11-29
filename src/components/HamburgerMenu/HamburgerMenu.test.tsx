import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HamburgerMenu } from './HamburgerMenu';

describe('Test hamburger menu:', () => {
  test('check if div container is correctly rendered if hamburger menu is active', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={(
              <HamburgerMenu
                hamburgerMenuActive
                menuHandler={() => {}}
                handleKeyDown={() => {}}
              />
)}
          />

        </Routes>
      </BrowserRouter>,
    );
    const [container] = document.getElementsByClassName('hamburger__menu');
    expect(container).toBeTruthy();
    expect(container).toContainHTML('div');
    const menuElement = getByText('Instruction');
    expect(menuElement).toBeTruthy();
    expect(menuElement).toHaveClass('normalButton hamburger__menu__button');
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
                handleKeyDown={() => {}}
              />
                )}
          />

        </Routes>
      </BrowserRouter>,
    );
    const activeMenuContainer = document.querySelector('.hamburger__menu--active');
    expect(activeMenuContainer).toBeFalsy();
  });
});
