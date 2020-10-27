import React from 'react';

import { render } from '@testing-library/react';

import Restaurant from './Restaurant';

test('Restaurant', () => {
  const restaurant = {
    name: '김밥제국',
  };

  const { container } = render((
    <Restaurant restaurant={restaurant} />
  ));

  expect(container).toHaveTextContent('김밥제국');
});
