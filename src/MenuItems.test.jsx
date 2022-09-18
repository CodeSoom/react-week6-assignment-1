import { render } from '@testing-library/react';

import MenuItems from './MenuItems';

import restaurantDetail from '../fixtures/restaurantDetail';

describe('RestaurantDetail', () => {
  context('with menu items', () => {
    it('rendes restaurant details', () => {
      const { menuItems } = restaurantDetail;

      const { getByText } = render(
        <MenuItems
          menuItems={menuItems}
        />,
      );

      restaurantDetail.menuItems.forEach((menuItem) => {
        expect(getByText(menuItem.name)).not.toBeNull();
      });
    });
  });

  context('without menu item', () => {
    it('renders no items message', () => {
      [[], null, undefined].forEach((menuItems) => {
        const { container } = render(
          <MenuItems
            menuItems={menuItems}
          />,
        );

        expect(container).toHaveTextContent('메뉴가 없어요!');
      });
    });
  });
});
