import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetail from './RestaurantDetail';

describe('RestaurantDetail', () => {
  describe('before fetch', () => {
    it('render Loading', () => {
      const dispatch = jest.fn();
      useDispatch.mockImplementation(() => dispatch);
      useSelector.mockImplementation((selector) => selector({
        restaurantDetail: {},
      }));

      const { container } = render((
        <RestaurantDetail />
      ));

      expect(container).toHaveTextContent('Loading...');
    });
  });

  describe('render', () => {
    it('render restaurantDetail', () => {
      const dispatch = jest.fn();
      useDispatch.mockImplementation(() => dispatch);
      useSelector.mockImplementation((selector) => selector({
        restaurantDetail: {
          id: 1, name: '양천주가', address: '서울', menuItems: [{ id: 1, restaurantId: 1, name: '볶음밥' }],
        },
      }));

      const { container } = render((
        <RestaurantDetail />
      ));

      expect(container).toHaveTextContent('양천주가');
      expect(container).toHaveTextContent('볶음밥');
    });
  });
});
