import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import RestaurantDetailsPage from './RestaurantDetailsPage';

describe('RestaurantDetailsPage', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      restaurantDetails: {
        name: '양천 주가',
        address: '서울시 강남구',
        menuItems: [],
      },
    }));
  });

  it('renders restaurant details page', () => {
    const { container } = render((
      <MemoryRouter>
        <RestaurantDetailsPage />
      </MemoryRouter>
    ));

    expect(container).toHaveTextContent('양천 주가');
  });
});
