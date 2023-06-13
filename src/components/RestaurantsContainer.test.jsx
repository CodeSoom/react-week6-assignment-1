import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';
import { MemoryRouter } from 'react-router-dom';

test('RestaurantsContainer', () => {
  useSelector.mockImplementation((selector) =>
    selector({
      restaurants: [{ id: 1, name: '마법사주방' }],
    })
  );
  const { container } = render(
    <MemoryRouter>
      <RestaurantsContainer />
    </MemoryRouter>
  );

  expect(container).toHaveTextContent('마법사주방');
});
