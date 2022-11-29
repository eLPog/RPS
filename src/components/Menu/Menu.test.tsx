import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Menu } from './Menu';

describe('Test Menu elements', () => {
  test('Check if all buttons are rendered', () => {
    const { queryAllByRole } = render(
      <BrowserRouter>
        <Menu />
      </BrowserRouter>,
    );
    const allButtons = queryAllByRole('button');
    expect(allButtons).toHaveLength(5);
  });
  test('Check if button have correctly class', () => {
    const { queryByText } = render(
      <BrowserRouter>
        <Menu />
      </BrowserRouter>,
    );
    const buttonResetHistory = queryByText('Reset history');
    expect(buttonResetHistory?.tagName.toLowerCase()).toBe('button');
    expect(buttonResetHistory).toHaveClass('normalButton');
    const buttonInstruction = queryByText('Instruction');
    expect(buttonInstruction?.tagName.toLowerCase()).toBe('button');
    expect(buttonInstruction).toHaveClass('normalButton');
  });
});
