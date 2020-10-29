import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

describe('RestaurantsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants: [
      { id: 1, name: '마법사주방' },
    ],
  }));

  const renderRestaurantsContainer = () => render(
    <RestaurantsContainer />,
  );

  it('renders Restaurants', () => {
    const { container } = renderRestaurantsContainer();

    expect(container).toHaveTextContent('마법사주방');
  });
});
