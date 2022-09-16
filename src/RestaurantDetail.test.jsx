import { render } from '@testing-library/react';

import RestaurantDetail from './RestaurantDetail';

import restaurantDetail from '../fixtures/restaurantDetail';

describe('RestaurantDetail', () => {
  it('rendes', () => {
    const { container, getByText } = render(
      <RestaurantDetail
        restaurantDetail={restaurantDetail}
      />,
    );

    expect(getByText(restaurantDetail.name)).not.toBeNull();
    expect(container).toHaveTextContent('주소:');
    expect(container).toHaveTextContent(restaurantDetail.address);
    expect(getByText(/메뉴/)).not.toBeNull();

    restaurantDetail.menuItems.forEach((menuItem) => {
      expect(getByText(menuItem.name)).not.toBeNull();
    });
  });
});
