import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import RestaurantDetailsContainer from './RestaurantDetailsContainer';

describe('RestaurantDetailsContainer', () => {
  context('식당의 정보가 없다면', () => {
    useSelector.mockImplementation((selector) => selector({
      restaurantDetails: null,
    }));

    it('Loading..을 보여준다', () => {
      const { container } = render((
        <RestaurantDetailsContainer />
      ));

      expect(container).toHaveTextContent('Loading');
    });
  });

  context('식당의 정보가 있다면', () => {
    it('정보를 보여준다', () => {
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
            {
              id: 2,
              restaurantId: 1,
              name: '짬뽕',
            },
          ],
        },
      }));

      const { container } = render((
        <RestaurantDetailsContainer />
      ));

      expect(container).toHaveTextContent('양천주가');
      expect(container).toHaveTextContent('비빔밥');
    });
  });
});
