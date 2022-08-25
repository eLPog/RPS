import { render, screen } from '@testing-library/react';
import React from 'react';
import { Footer } from './Footer';

describe('Check AppHistory Component', () => {
  test('check if div is correctly rendered', () => {
    render(
      <Footer />,

    );
    const [container] = document.getElementsByClassName('footer');
    expect(container).toBeTruthy();
    expect(container).toContainHTML('h4');
  });
  test('check if footer hat correctly github link', () => {
    const linkElement = screen.findByText('eLPog');
    expect(linkElement).toBeTruthy();
  });
});
