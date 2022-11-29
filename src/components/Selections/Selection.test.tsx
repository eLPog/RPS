import React from 'react';
import { fireEvent, queryByText, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Selections } from './Selections';

describe('Selection wall', () => {
  test('Should render five signs (buttons) to choose', () => {
    const { queryAllByRole } = render(
      <BrowserRouter>
        <Selections
          namesAdded
          player="Player 1"
          playerNameHandler={() => {}}
          playerChoice="✋"
          playerName="TestPlayer"
          playerChoiceHandler={() => {}}
        />
      </BrowserRouter>,
    );
    const allButtons = queryAllByRole('button');
    expect(allButtons).toHaveLength(5);
    for (let i = 0; i < allButtons.length; i++) {
      expect(allButtons[i]).toHaveClass('selection');
    }
  });
  test('Should show user name', () => {
    const { queryByText } = render(
      <BrowserRouter>
        <Selections
          namesAdded
          player="Player 1"
          playerNameHandler={() => {}}
          playerChoice="✋"
          playerName="TestPlayer"
          playerChoiceHandler={() => {}}
        />
      </BrowserRouter>,
    );
    const playerName = queryByText('TestPlayer');
    expect(playerName).toBeTruthy();
    expect(playerName).toHaveTextContent('TestPlayer');
    expect(playerName?.tagName.toLowerCase()).toBe('span');
    expect(playerName?.tagName.toLowerCase()).not.toBe('div');
  });
  test('Should call playerChoiceHandler function on click on every sign/button', () => {
    const playerChoiceHandler = jest.fn();
    const { queryAllByRole } = render(
      <BrowserRouter>
        <Selections
          namesAdded
          player="Player 1"
          playerNameHandler={() => {}}
          playerChoice="✋"
          playerName="TestPlayer"
          playerChoiceHandler={playerChoiceHandler}
        />
      </BrowserRouter>,
    );
    const allButtons = queryAllByRole('button');
    (async () => {
      await allButtons.forEach((el) => {
        fireEvent.click(el);
      });
    })();
    expect(playerChoiceHandler).toBeCalledTimes(5);
  });
});
