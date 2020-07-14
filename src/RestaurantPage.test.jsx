import React from 'react';

import { render } from '@testing-library/react';

import RestaurantPage from './RestaurantPage';

describe('RestaurantPage', () => {
  it('render Home page', () => {
    const { container } = render((
      <RestaurantPage />
    ));

    expect(container).toHaveTextContent('상세페이지입니다.');
  });
});
