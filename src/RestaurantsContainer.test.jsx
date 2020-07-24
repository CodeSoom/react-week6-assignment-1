import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

jest.mock('react-redux');
jest.mock('./services/api');

test('RestaurantsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants: [
      { id: 1, name: '마법사주방' },
    ],
  }));

  const handleClickRestaurant = jest.fn();
  const { container, getByText } = render((
    <RestaurantsContainer onClickRestaurant={handleClickRestaurant} />
  ));

  expect(container).toHaveTextContent('마법사주방');
  fireEvent.click(getByText('마법사주방'));
  expect(handleClickRestaurant).toBeCalledWith({ id: 1, name: '마법사주방' });
});
