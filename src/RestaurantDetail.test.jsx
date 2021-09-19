import { render } from '@testing-library/react';

import RestaurantDetail from './RestaurantDetail';

describe('RestaurantDetail', () => {
  it('renders name', () => {
    const restaurant = {
      id: 1,
      name: '마법사 주방',
      address: '서울시 강남구 역삼동',
      menuItems: [],
    };

    const { container } = render((
      <RestaurantDetail restaurant={restaurant} />
    ));

    expect(container).toHaveTextContent('마법사 주방');
  });
});
