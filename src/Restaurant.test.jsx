import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import Restaurant from './Restaurant';

test('Restaurant', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurant: {
      name: '냠냠떡볶이',
      address: '경기도 화성시 동탄',
      menuItems: [
        { id: 1, name: '떡볶이' },
        { id: 2, name: '순대 ' },
      ],
    },
  }));

  const { getByText } = render(<Restaurant />);

  expect(getByText(/냠냠떡볶이/)).not.toBeNull();
  expect(getByText(/순대/)).not.toBeNull();
});
