import React from 'react';

import { render } from '@testing-library/react';

import Restaurant from '../Restaurant';
import restaurant from '../../../fixtures/restaurant';

describe('Restaurant', () => {
  it('레스토랑 정보를 출력한다', () => {
    const { queryByText } = render((
      <Restaurant restaurant={restaurant} />
    ));

    expect(queryByText(restaurant.name)).not.toBeNull();
    expect(queryByText(restaurant.address)).not.toBeNull();
    expect(queryByText(restaurant.menuItems[0].name)).not.toBeNull();
  });
});
