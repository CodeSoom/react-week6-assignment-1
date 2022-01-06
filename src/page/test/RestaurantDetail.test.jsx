// @ts-check
import React from 'react';

import { render } from '@testing-library/react';

import RestaurantDetail from '../RestaurantDetail';
import restaurant from '../../../fixtures/restaurant';

describe('RestaurantDetail', () => {
  it('레스토랑의 정보를 출력한다.', () => {
    const { queryByText } = render((
      <RestaurantDetail restaurant={restaurant} />
    ));

    expect(queryByText(restaurant.address)).not.toBeNull();
    expect(queryByText(restaurant.menuItems[0].name)).not.toBeNull();
    expect(queryByText(restaurant.name)).not.toBeNull();
  });
});
