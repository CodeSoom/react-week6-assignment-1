import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render, fireEvent } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

test('RestaurantsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants: [
      { id: 1, name: '양천주가' },
    ],
  }));

  const { getByText } = render((
    <MemoryRouter>
      <RestaurantsContainer />
    </MemoryRouter>
  ));

  expect(getByText('양천주가')).not.toBeNull();

  fireEvent.click(getByText(/양천주가/));
});
