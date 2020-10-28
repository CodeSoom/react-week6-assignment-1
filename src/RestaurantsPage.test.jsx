import React from 'react';

import { render } from '@testing-library/react';

import RestaurantsPage from './RestaurantsPage';

describe('RestaurantsPage', () => {
  it('show regions and categories ', () => {
    const { container } = render((
      <RestaurantsPage />
    ));

    expect(container).toHaveTextContent('About');
    expect(container).toHaveTextContent('About 페이지 입니다.');
  });
});
