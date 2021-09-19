import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import RestaurantsContainer from './RestaurantsContainer';

describe('RestaurantsContainer', () => {
  it('renders restaurants', () => {
    useSelector.mockImplementation((selector) => selector({
      restaurants: [
        { id: 1, name: '마법사주방' },
      ],
    }));

    const handleClick = jest.fn();

    const { container } = render((
      <MemoryRouter>
        <RestaurantsContainer onClickRestaurant={handleClick} />
      </MemoryRouter>
    ));

    expect(container).toHaveTextContent('마법사주방');
  });
});
