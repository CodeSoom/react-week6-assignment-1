import React from 'react';

import { render } from '@testing-library/react';

import RestaurantContainer from './RestaurantContainer';
import restaurant from '../fixtures/restaurant'

describe('RestaurantContainer', () => {
  it('with restaurant data', () => {
    const { container } = render(<RestaurantContainer
      data = {restaurant}
    />);

    expect(container).toHaveTextContent('코드숨 아파트');
    expect(container).toHaveTextContent('테스트코드 한사발');
  });
});
