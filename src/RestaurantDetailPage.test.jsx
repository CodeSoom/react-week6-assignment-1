import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetailPage from './RestaurantDetailPage';

import RESTAURANTDETAIL from '../fixtures/restaurantDetail';

describe('RestaurantDetailPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      restaurantDetail: RESTAURANTDETAIL,
    }));
  });

  it('renders restaurants detail', () => {
    const { queryByText } = render((
      <MemoryRouter>
        <RestaurantDetailPage />
      </MemoryRouter>
    ));

    expect(queryByText('양천주가')).not.toBeNull();
    expect(queryByText('서울 강남구 123456')).not.toBeNull();
    expect(queryByText('메뉴')).not.toBeNull();
    expect(queryByText('비빔밥')).not.toBeNull();
  });
});
