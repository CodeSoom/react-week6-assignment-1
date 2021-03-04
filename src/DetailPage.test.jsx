import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import DetailPage from './DetailPage';

import restaurant from '../fixtures/restaurant';

describe('DetailPage', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({ restaurant }));

  it('dispatches loadRestaurant with restaurant id', () => {
    render(<DetailPage match={{ params: 1 }} />);

    expect(dispatch).toBeCalled();
  });
});
