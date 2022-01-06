import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantPage from './RestaurantPage';
import { MemoryRouter } from 'react-router-dom';

test('RestaurantPage', () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/restaurant/1']}>
      <RestaurantPage />
    </MemoryRouter>
  );

  expect(container).toHaveTextContent('양천주가');
  expect(container).toHaveTextContent('주소: 서울시 강남구');
  expect(container).toHaveTextContent('팔보채');
});
