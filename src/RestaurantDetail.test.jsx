import { render } from '@testing-library/react';

import RestaurantDetail from './RestaurantDetail';

describe('RestaurantDetail', () => {
  const restaurant = {
    id: 1,
    name: '양천주가',
  };

  it('식당 이름을 렌더링 한다.', () => {
    const { container } = render((
      <RestaurantDetail restaurant={restaurant} />
    ));

    expect(container).toHaveTextContent('양천주가');
  });
});
