import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantDetailPage from './RestaurantDetailPage';

test('RestaurantDetailPage', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurant: {
      name: '냠냠떡볶이',
      menuItems: [
        { id: 1, name: '떡볶이' },
        { id: 2, name: '순대 ' },
      ],
    },
  }));

  const { getByText } = render(<RestaurantDetailPage />);

  expect(getByText(/냠냠떡볶이/)).not.toBeNull();
  expect(getByText(/순대/)).not.toBeNull();
});
