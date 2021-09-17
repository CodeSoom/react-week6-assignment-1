import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantDetailsContainer from './RestaurantDetailsContainer';

describe('RestaurantDetailsContainer', () => {
  context('with information about a restaurant', () => {
    useSelector.mockImplementation((selector) => selector({
      restaurantDetails: {
        id: 1,
        name: '양천주가',
        address: '서울 강남구 123456',
        menuItems: [
          {
            id: 1,
            restaurantId: 1,
            name: '비빔밥',
          },
        ],
      },
    }));

    it('renders the information', () => {
      const { container } = render((
        <RestaurantDetailsContainer />
      ));

      expect(container).toHaveTextContent('양천주가');
      expect(container).toHaveTextContent('강남구');
      expect(container).toHaveTextContent('비빔밥');
    });
  });

  context('without information about a restaurant', () => {
    useSelector.mockImplementation((selector) => selector({
      restaurantDetails: null,
    }));

    it('renders on loading message', () => {
      const { container } = render((
        <RestaurantDetailsContainer />
      ));

      expect(container).toHaveTextContent('Loading');
    });
  });
});
