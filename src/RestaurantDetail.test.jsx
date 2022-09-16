import { render } from '@testing-library/react';

import RestaurantDetail from './RestaurantDetail';

import restaurantDetail from '../fixtures/restaurantDetail';

describe('RestaurantDetail', () => {
  it('rendes', () => {
    const { getByText } = render(
      <RestaurantDetail
        restaurantDetail={restaurantDetail}
      />,
    );

    expect(getByText(restaurantDetail.name)).not.toBeNull();
    expect(getByText(/주소:/)).not.toBeNull();
    expect(getByText(restaurantDetail.address)).not.toBeNull();
    expect(getByText(/메뉴/)).not.toBeNull();

    restaurantDetail.menuItems.forEach((menuItem) => {
      expect(getByText(menuItem.name)).not.toBeNull();
    });
  });
});
