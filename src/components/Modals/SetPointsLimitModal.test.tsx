import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { SetPointsLimitModal } from './SetPointsLimitModal';

describe('Check set points limit component', () => {
  test('if input is correctly rendered', () => {
    const { queryByTestId } = render(<SetPointsLimitModal showModalHandler={() => {}} setNewPoints={() => {}} />);
    const input = queryByTestId('setPointInput');
    expect(input).toBeTruthy();
    expect(input).toHaveClass('setPointInput');
  });
  test('if are two buttons in modal', () => {
    const { queryAllByRole } = render(<SetPointsLimitModal showModalHandler={() => {}} setNewPoints={() => {}} />);
    const allButtons = queryAllByRole('button');
    expect(allButtons).toHaveLength(2);
    expect(allButtons[0] && allButtons[1]).toHaveClass('normalButton');
  });
});
