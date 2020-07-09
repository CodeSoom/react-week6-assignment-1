import React from 'react';

import { render } from '@testing-library/react';

import RestaurantViewPanel from './RestaurantViewPanel';

import RESTAURANT from '../../fixtures/restaurant';

describe('<RestaurantViewPanel />', () => {
  const renderComponent = (restaurant) => render((
    <RestaurantViewPanel restaurant={restaurant} />
  ));

  context('with restaurant', () => {
    it('display view-panel', () => {
      const { container } = renderComponent(RESTAURANT);
      expect(container).toHaveTextContent(RESTAURANT.name);
      expect(container).toHaveTextContent(RESTAURANT.address);
      expect(container).toHaveTextContent(RESTAURANT.menuItems[0].name);
    });
  });

  context('without restaurant', () => {
    it('display empty view-panel', () => {
      const { container } = renderComponent({});
      expect(container).not.toHaveTextContent(RESTAURANT.name);
      expect(container).not.toHaveTextContent(RESTAURANT.address);
      expect(container).not.toHaveTextContent(RESTAURANT.menuItems[0].name);
    });
  });
});
