import { render } from '@testing-library/react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import { AppHistory } from './AppHistory';

describe('Check AppHistory Component', () => {
  test('check if div is correctly rendered', () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppHistory />} />
        </Routes>
      </BrowserRouter>,
    );
    const container = document.getElementsByClassName('timeline');
    expect(container).toBeTruthy();
  });
});
