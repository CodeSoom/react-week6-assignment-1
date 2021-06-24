import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

test('RestaurantsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants: [
      { id: 1, name: '마법사주방' },
    ],
  }));

  const { getByText } = render((
    <MemoryRouter>
      <RestaurantsContainer />
    </MemoryRouter>
  ));

  const link = getByText('마법사주방');
  expect(link).not.toBeNull();
  expect(link).toHaveAttribute('href', '/restaurants/1');
});
