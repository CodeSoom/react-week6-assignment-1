import React from 'react';

import { render } from '@testing-library/react';

import Restaurant from './Restaurant';

import restaurant from '../fixtures/restaurant';

describe('Restaurant', () => {
  it('render restaurant', () => {
    const { container } = render((
      <Restaurant restaurant={restaurant} />
    ));
    expect(container).toHaveTextContent(restaurant.name);
    expect(container).toHaveTextContent(restaurant.address);
  });
});
