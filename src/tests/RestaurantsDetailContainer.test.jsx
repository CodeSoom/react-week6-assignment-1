import React from 'react';

import { render } from '@testing-library/react';

import {
  MemoryRouter,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetailContainer from '../containers/RestaurantDetailContainer';

import restaurant from '../../fixtures/restaurantDetail';

function implementationSelector(mockData) {
  useSelector.mockImplementation((selector) => selector({
    restaurant: mockData,
  }));
}

describe('RestaurantDetailContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
  });

  context('with restaurant detail', () => {
    beforeEach(() => {
      implementationSelector(restaurant);
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
      implementationSelector(undefined);
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
