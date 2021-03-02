import React from 'react';

import { render } from '@testing-library/react';

import {
  MemoryRouter,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetailContainer from './RestaurantDetailContainer';

import restaurants from '../fixtures/restaurantDetail';

describe('RestaurantDetailContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
  });

  context('with restaurant detail', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        restaurantDetail: restaurants,
      }));
    });

    it('renders detail with restaurant detail', () => {
      const { container } = render((
        <MemoryRouter>
          <RestaurantDetailContainer />
        </MemoryRouter>
      ));
      expect(container).toHaveTextContent('양천주가');
      expect(container).toHaveTextContent('서울 강남구');
    });
  });

  context('without restaurant detail', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        undefined,
      }));
    });

    it('renders loading text', () => {
      const { container } = render((
        <MemoryRouter>
          <RestaurantDetailContainer />
        </MemoryRouter>
      ));

      expect(container).toHaveTextContent('페이지를 로딩중입니다..');
    });
  });
});
