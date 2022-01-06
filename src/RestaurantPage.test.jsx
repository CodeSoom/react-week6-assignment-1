import React from 'react';

import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import RestaurantPage from './RestaurantPage';

describe('RestaurantPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      restaurant: { id: 1, name: '양천주가', menuItems: [ { id: 11, name: '메뉴 1번', }, ], },
    }));
  });

  it('set restaurant information', () => {
    const { container } = render(<RestaurantPage />);

    expect(container).toHaveTextContent('양천주가');
    expect(container).toHaveTextContent('메뉴 1번');
  });
});
