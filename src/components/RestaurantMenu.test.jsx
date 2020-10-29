import React from 'react';
import { render, screen } from '@testing-library/react';

import RestaurantMenu from './RestaurantMenu';

describe('RestaurantMenu', () => {
  context('with menus', () => {
    it('renders menus', () => {
      render(<RestaurantMenu />);

      expect(screen.getByText('탕수육')).toBeInTheDocument();
    });
  });
});
