import React from 'react';

import { render } from '@testing-library/react';

import Restaurant from './Restaurant';

import RESTAURANTS from '../fixtures/restaurants';

describe('Restaurant', () => {
  const RESTAURANT = RESTAURANTS[0];

  it('레스토랑 정보를 보여준다.', () => {
    const { getByText } = render((
      <Restaurant restaurant={RESTAURANT} />
    ));

    expect(getByText(RESTAURANT.name)).toBeInTheDocument();
  });
});
