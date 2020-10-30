import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import RestaurantsContainer from './RestaurantsContainer';

jest.mock('react-redux');

describe('RestaurantsContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurants: [
      { id: 1, name: '마법사주방' },
    ],
  }));

  const renderRestaurantsContainer = () => render(
    <MemoryRouter>
      <RestaurantsContainer />
    </MemoryRouter>,
  );

  it('renders Restaurants', () => {
    const { container } = renderRestaurantsContainer();

    expect(container).toHaveTextContent('마법사주방');
  });

  context('when restaurant link is clicked', () => {
    it('dispatch selectRestaurant and loadRestaurant', () => {
      const { getByText } = renderRestaurantsContainer();

      fireEvent.click(getByText('마법사주방'));

      expect(dispatch).toBeCalledTimes(2);
    });
  });
});
