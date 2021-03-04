import React from 'react';

import { render } from '@testing-library/react';

import RestaurantsDetails from './RestaurantsDetails';

describe('RestaurantsDetails', () => {
  const restaurantsDetails = {
    id: 1,
    name: '양천주가',
    address: '서울 강남구',
    menus: [
      { id: 101, name: '탕수육' },
      { id: 102, name: '짜장면' },
    ],
  };

  it('식당의 상세 정보를 표시합니다.', () => {
    const { queryByText } = render(<RestaurantsDetails restaurantsDetails={restaurantsDetails} />);

    expect(queryByText(/양천주가/)).not.toBeNull();
    expect(queryByText(/서울 강남구/)).not.toBeNull();
    expect(queryByText(/탕수육/)).not.toBeNull();
    expect(queryByText(/짜장면/)).not.toBeNull();
  });
});
