import React from 'react';

import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';
import Restaurant from './Restaurant';

import restaurants from '../fixtures/restaurants';

test('Restaurant', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    restaurant: {
      ...restaurants[0],
      menuItems: [
        { id: 1, name: '탕수육' },
      ],
    },
  }));

  const { container } = render((
    <MemoryRouter>
      <Restaurant />
    </MemoryRouter>
  ));

  expect(container).toHaveTextContent('주소: 서울시 강남구 역삼동');
  expect(container).toHaveTextContent('메뉴');
  expect(container).toHaveTextContent('탕수육');
});
