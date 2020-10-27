import React from 'react';

import { render } from '@testing-library/react';

import Restaurant from './Restaurant';

test('Restaurant', () => {
  const restaurant = {
    name: '김밥제국',
    address: '서울시 강남구 역삼동',
  };

  const { container } = render((
    <Restaurant restaurant={restaurant} />
  ));

  expect(container).toHaveTextContent('김밥제국');
  expect(container).toHaveTextContent('서울시 강남구 역삼동');
});
