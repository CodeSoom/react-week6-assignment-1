import { render } from '@testing-library/react';

import RestaurantDetailPage from './RestaurantDetailPage';

test('RestaurantDetailPage', () => {
  const { getByText } = render(<RestaurantDetailPage />);

  expect(getByText(/냠냠떡볶이/)).not.toBeNull();
  expect(getByText(/메뉴/)).not.toBeNull();
});
