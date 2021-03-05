import React from 'react';

import { render } from '@testing-library/react';

import RestaurantsDetail from '../RestaurantsDetail';

describe('RestaurantsDetail', () => {
  const restaurantsDetail = {
    id: 1,
    name: '마법사 주방',
    address: '서울시 강남구 강남대로 94길 9',
    menuItems: [
      {
        id: 14,
        restaurantsId: 3,
        name: '맛나는거',
      },
      {
        id: 15,
        restaurantsId: 3,
        name: '짠거',
      },
    ],
  };

  it('화면에 레스토랑의 자세한 정보들을 보여준다.', () => {
    const { queryByText } = render(<RestaurantsDetail restaurantsDetail={restaurantsDetail} />);

    expect(queryByText(/마법사 주방/)).toBeInTheDocument();
    expect(queryByText(/서울시 강남구 강남대로 94길 9/)).toBeInTheDocument();
    expect(queryByText(/맛나는거/)).toBeInTheDocument();
    expect(queryByText(/짠거/)).toBeInTheDocument();
  });

  it('정보가 불러오지기 전이라면 Loading 화면을 보여준다.', () => {
    const { queryByText } = render(<RestaurantsDetail restaurantsDetail={{}} />);

    expect(queryByText(/Loading/)).toBeInTheDocument();
  });
});
