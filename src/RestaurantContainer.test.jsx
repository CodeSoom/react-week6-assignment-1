import React from 'react';

import { render } from '@testing-library/react';

import RestaurantContainer from './RestaurantContainer';

import RESTAURANTS from '../fixtures/restaurants';

describe('RestaurantContainer', () => {
  const RESTAURANT = RESTAURANTS[0];

  it('레스토랑 정보를 보여준다.', () => {
    const { getByText } = render((
      <RestaurantContainer restaurant={RESTAURANT} />
    ));

    expect(getByText(RESTAURANT.name)).toBeInTheDocument();
  });
});
