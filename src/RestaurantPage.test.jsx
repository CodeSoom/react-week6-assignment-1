import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import RestaurantPage from './RestaurantPage';

import Restaurant from '../fixtures/restaurant';

describe('RestaurantPage', () => {
  it('render restaurant', () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({ restaurant: Restaurant[0] }));

    const { container } = render(
      <MemoryRouter>
        <RestaurantPage />
      </MemoryRouter>,
    );

    expect(container).toHaveTextContent('김밥제국');
  });
});
