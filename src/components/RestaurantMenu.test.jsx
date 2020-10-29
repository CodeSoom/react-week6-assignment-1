import React from 'react';
import { render, screen } from '@testing-library/react';

import RestaurantMenu from './RestaurantMenu';
import restaurant from '../../fixtures/restaurant';

describe('RestaurantMenu', () => {
  context('with menus', () => {
    it('renders menus', () => {
      render(<RestaurantMenu menus={restaurant.menuItems} />);

      expect(screen.getByText('메뉴')).toBeInTheDocument();
      expect(screen.getByText('비빔밥')).toBeInTheDocument();
      expect(screen.getByText('짬뽕')).toBeInTheDocument();
      expect(screen.getByText('탕수육')).toBeInTheDocument();
      expect(screen.getByText('팔보채')).toBeInTheDocument();
    });
  });
});
