import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import RestaurantDetailPage from './RestaurantDetailPage';

test('RestaurantDetailPage', async () => {
  useSelector.mockImplementation((selector) => selector({
    regions: [
      { id: 1, name: '서울' },
    ],
    categories: [
      { id: 1, name: '한식' },
    ],
    restaurants: [
      { id: 1, name: '마법사주방' },
    ],
  }));

  const { findByRole } = render(<RestaurantDetailPage />);

  expect(await findByRole('heading', { level: 2 })).toHaveTextContent('마법사주방');
});
