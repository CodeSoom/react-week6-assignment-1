import React from 'react';

import { render } from '@testing-library/react';

import RestaurantDetail from './RestaurantDetail';

jest.mock('react-redux');
jest.mock('./services/api');

describe('RestaurantDetail', () => {
  it('renders name', () => {
    const restaurant = {
      id: 1,
      name: '한신포차',
    };
    const { container } = render((
      <RestaurantDetail restaurant={restaurant} />
    ));

    expect(container).toHaveTextContent('메뉴');
  });
});
