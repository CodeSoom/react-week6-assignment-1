import { render } from '@testing-library/react';

import RestaurantDetailPage from './RestaurantDetailPage';

test('RestaurantDetailPage', () => {
  const { queryByText } = render((
    <RestaurantDetailPage />
  ));

  expect(queryByText('메뉴')).not.toBeNull();
  expect(queryByText('양천주가')).not.toBeNull();
  expect(queryByText('탕수육')).not.toBeNull();
  expect(queryByText('팔보채')).not.toBeNull();
});
