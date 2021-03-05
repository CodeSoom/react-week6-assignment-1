import React from 'react';

import { render } from '@testing-library/react';

import RestaurantDetail from './RestaurantDetail';

describe('RestaurantDetail', () => {
  it('레스토랑 상세 정보를 보여준다.', () => {
    const { queryByText } = render((
      <RestaurantDetail />
    ));

    expect(queryByText('서울 강남구 123456')).not.toBeNull();
  });
});
