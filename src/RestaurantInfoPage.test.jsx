import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import RestaurantInfoPage from './RestaurantInfoPage';

describe('RestaurantInfoPage', () => {
  it('renders restaurant information page', () => {
    const { container } = render((
      <MemoryRouter>
        <RestaurantInfoPage />
      </MemoryRouter>

    ));

    expect(container).toHaveTextContent('Restaurant Information');
  });
});
