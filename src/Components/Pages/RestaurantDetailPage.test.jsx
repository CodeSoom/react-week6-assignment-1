import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useSelector } from 'react-redux';

import RestaurantDetailPage from './RestaurantDetailPage';

import DETAIL from '../../../fixtures/restaurantDetail';

test('DetailPage', () => {
  useSelector.mockImplementation((selector) => selector({
    detail: DETAIL,
  }));
  const { container } = render((
    <MemoryRouter>
      <RestaurantDetailPage />
    </MemoryRouter>
  ));

  expect(container).toHaveTextContent(DETAIL.name);
  expect(container).toHaveTextContent(DETAIL.address);
});
