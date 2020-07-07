import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import RestaurantContainer from './RestaurantContainer';

import RESTAURANTS from '../fixtures/restaurants';

describe('RestaurantContainer', () => {
  it('레스토랑 정보를 보여준다.', () => {
    useSelector.mockImplementation((selector) => selector({
      restaurants: RESTAURANTS,
    }));

    const { container } = render((
      <MemoryRouter>
        <RestaurantContainer />
      </MemoryRouter>
    ));

    expect(container).toHaveTextContent('양천주가');
  });
});
