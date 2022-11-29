import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HamburgerMenu } from './HamburgerMenu';

describe('Componen HamburgerMenu', () => {
  test('should render menu', () => {
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
  test('should hide menu if hamburger menu is not active', () => {
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
  test('should change icon in menu toggle button', () => {
    const menuHandler = jest.fn();
    const { queryByText } = render(
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={(
              <HamburgerMenu
                hamburgerMenuActive
                menuHandler={menuHandler}
                handleKeyDown={() => {}}
              />
                      )}
          />

        </Routes>
      </BrowserRouter>,
    );
    const menuToggleButton = queryByText('X');
    expect(menuToggleButton).toHaveClass('hamburger__button--active');
    // @ts-ignore
    fireEvent.click(menuToggleButton);
    expect(menuHandler).toBeCalled();
  });
});
