import React from 'react';

import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Restaurant from './Restaurant';

describe('Restaurant', () => {
  const restaurantRender = (restaurant) => render((
    <MemoryRouter>
      <Restaurant restaurant={restaurant} />
    </MemoryRouter>

  ));

  it('render restaurant', () => {
    const { getByText } = restaurantRender({ id: 1, name: '양천주가' });

    expect(getByText('양천주가')).not.toBeNull();
  });
});
