import { queryByRole, queryByText, render } from '@testing-library/react';
import React from 'react';
import {
  BrowserRouter,
} from 'react-router-dom';
import { Instruction } from './Instruction';

describe('Test Instruction component', () => {
  test('if show title in h2 tag', () => {
    const { debug, queryByText, getByRole } = render(
      <BrowserRouter>

        <Instruction />

      </BrowserRouter>,
    );
    const h2 = queryByText('How to play');
    expect(h2).toBeTruthy();
    expect(h2?.tagName.toLowerCase()).toBe('h2');
  });
  test('if show graphic', () => {
    const { queryByRole } = render(
      <BrowserRouter>

        <Instruction />

      </BrowserRouter>,
    );
    const img = queryByRole('img');
    expect(img).toBeTruthy();
    expect(img).toHaveAttribute('alt');
  });
  test('if show button with back text', () => {
    const { queryByRole } = render(
      <BrowserRouter>

        <Instruction />

      </BrowserRouter>,
    );
    const btn = queryByRole('button');
    expect(btn).toBeTruthy();
    expect(btn).toHaveClass('normalButton');
  });
});
