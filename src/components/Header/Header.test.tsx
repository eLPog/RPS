import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './Header';

describe('Check header component', () => {
  test('if title is correctly rendered', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    const title = getByText('Rock Paper Scissors Lizard Spoke');
    expect(title).toBeTruthy();
    expect(title).toHaveClass('title');
  });
});
