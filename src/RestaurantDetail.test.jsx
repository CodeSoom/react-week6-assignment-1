import React from 'react';

import { render } from '@testing-library/react';

import RestaurantDetail from './RestaurantDetail';

describe('RestaurantDetail', () => {
  it('레스토랑 상세 정보를 보여준다.', () => {
    const params = { id: '1' };

    const { queryByText } = render((
      <RestaurantDetail params={params} />
    ));

    expect(queryByText('레스토랑 1')).not.toBeNull();
  });
});
