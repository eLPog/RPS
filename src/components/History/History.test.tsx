import { render } from '@testing-library/react';
import React from 'react';
import { History } from './History';

describe('Test history component', () => {
  test('Check if show game stats correctly', () => {
    const resultsHistory = [{
      winner: 'Tom',
      selectedSignPlayer1: '🖖',
      selectedSignPlayer2: '👊',
      gameID: 137,
      gameNumber: 1,
      dateOfPlay: '29.11.2022 9:52',
    }];
    const { queryByText, queryByRole } = render(<History resultsHistory={resultsHistory} />);
    const winner = queryByText('Tom');
    expect(winner).toHaveClass('winnerName');
    expect(winner?.tagName.toLowerCase()).toBe('span');
    const ulList = queryByRole('list');
    expect(ulList).toHaveClass('historyList');
  });
});
