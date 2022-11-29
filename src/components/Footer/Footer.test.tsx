import { render } from '@testing-library/react';
import React from 'react';
import Footer from './Footer';

beforeEach(() => {
  render(<Footer />);
});
describe('Check AppHistory Component', () => {
  test('check if div is correctly rendered', () => {
    const [container] = document.getElementsByClassName('footer');
    expect(container).toBeTruthy();
    expect(container).toContainHTML('h4');
  });
  test('check if h4 show correctly values', () => {
    const h4tags = document.querySelectorAll('h4');
    expect(h4tags[1]).toHaveTextContent('2022');
    expect(h4tags[0]).toHaveTextContent('Created by eLPog');
  });
});
