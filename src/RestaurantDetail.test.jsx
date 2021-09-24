import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetail from './RestaurantDetail';

describe('RestaurantDetail', () => {
  const restaurant = {
    id: 1,
    name: '마법사주방',
    address: '서울시 강남구',
  };

  it('renders name and address', () => {
    const { container } = render((
      <RestaurantDetail restaurant={restaurant} />
    ));

    expect(container).toHaveTextContent('마법사주방');
  });
});
