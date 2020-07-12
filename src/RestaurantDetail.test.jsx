import React from 'react';

import { render } from '@testing-library/react';

import RestaurantDetail from './RestaurantDetail';

import restaurant from '../fixtures/restaurant';

describe('RestaurantDetail', () => {
  it('초기화면 로딩', () => {
    const { getByText } = render((
      <RestaurantDetail restaurant={restaurant} />
    ));

    expect(getByText(/양천주가/)).toBeInTheDocument();
    expect(getByText(/주소:/)).toBeInTheDocument();
    expect(getByText(/서울시 강남구/)).toBeInTheDocument();
    expect(getByText(/메뉴/)).toBeInTheDocument();
    expect(getByText(/탕수육/)).toBeInTheDocument();
    expect(getByText(/팔보채/)).toBeInTheDocument();
  });
});
