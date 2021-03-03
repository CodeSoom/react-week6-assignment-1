import React from 'react';

import { render } from '@testing-library/react';

import RestaurantPage from './RestaurantPage';

describe('RestaurantPage', () => {
  it('renders without crash', () => {
    render(<RestaurantPage />);
  });
});
