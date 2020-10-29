import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import RestaurantsContainer from './RestaurantsContainer';

describe('RestaurantsContainer', () => {
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
});
