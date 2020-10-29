import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetailPage from './RestaurantDetailPage';

import RESTAURANT from '../fixtures/restaurant';

jest.mock('react-redux');

describe('RestaurantDetailPage', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurant: RESTAURANT,
  }));

  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderRestaurantDetail() {
    return render((
      <MemoryRouter initialEntries={['/restaurants/1']}>
        <RestaurantDetailPage />
      </MemoryRouter>
    ));
  }

  it('show restaurant detail', () => {
    const { container } = renderRestaurantDetail();

    expect(container).toHaveTextContent('양천주가');
    expect(container).toHaveTextContent('서울 강남구 12345');
  });

  it('call loadRestaurant action', () => {
    renderRestaurantDetail();

    expect(dispatch).toBeCalled();
  });
});
