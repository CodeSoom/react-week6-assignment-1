import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantsContainer from '.';

test('RestaurantsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants: [
      { id: 1, name: '마법사주방' },
    ],
  }));

  const { getByRole } = render((
    <RestaurantsContainer />
  ));

  expect(getByRole('link', { name: '마법사주방' })).toBeInTheDocument();
});
