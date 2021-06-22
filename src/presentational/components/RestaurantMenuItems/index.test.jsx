import { render } from '@testing-library/react';
import given from 'given2';

import RestaurantMenuItems from '.';

import restaurant from '../../../../fixtures/restaurant';

describe('RestaurantMenuItems', () => {
  function renderMenuItems() {
    return render((
      <RestaurantMenuItems menuItems={given.menuItems} />
    ));
  }

  context('with menuItems', () => {
    beforeEach(() => {
      given('menuItems', () => restaurant.menuItems);
    });

    it('renders menus', () => {
      const { getByText } = renderMenuItems();

      restaurant.menuItems.forEach(({ name }) => {
        expect(getByText(name)).toBeInTheDocument();
      });
    });
  });

  context('without menuItems', () => {
    beforeEach(() => {
      given('restaurant', () => []);
    });

    it('renders no menu items message', () => {
      const { getByText } = renderMenuItems();

      expect(getByText('메뉴를 준비중입니다.')).toBeInTheDocument();
    });
  });
});
