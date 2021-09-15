import { render } from '@testing-library/react';

import RestaurantDetailsContainer from './RestaurantDetailsContainer';

test('RestaurantDetailsContainer', () => {
  const { container } = render((
    <RestaurantDetailsContainer />
  ));

  expect(container).toHaveTextContent('양천주가');
  expect(container).toHaveTextContent('메뉴');
});
