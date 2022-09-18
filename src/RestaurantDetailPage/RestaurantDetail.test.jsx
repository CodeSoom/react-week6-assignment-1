import { render } from '@testing-library/react';

import RestaurantDetail from './RestaurantDetail';

import restaurantDetail from '../../fixtures/restaurantDetail';

describe('RestaurantDetail', () => {
  it('rendes restaurant details', () => {
    const { container } = render(
      <RestaurantDetail
        restaurantDetail={restaurantDetail}
      />,
    );

    expect(container).toHaveTextContent(restaurantDetail.name);
    expect(container).toHaveTextContent('주소:');
    expect(container).toHaveTextContent(restaurantDetail.address);
    expect(container).toHaveTextContent(/메뉴/);
  });
});
