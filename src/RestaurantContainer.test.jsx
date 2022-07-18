import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';
import RestaurantContainer from './RestaurantContainer';

describe('RestaurantContainer', () => {
  beforeEach(() => {
    const dispatch = jest.fn();

    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);
  });

  context('레스토랑 컨텐츠가 있을 때,', () => {
    it('레스토랑 정보가 보여집니다.', () => {
      useSelector.mockImplementation((selector) => selector({
        restaurant: {
          id: 1,
          name: '마법사주방',
          address: '서울시',
        },
      }));

      const { container } = render((
        <RestaurantContainer restaurantId="1" />
      ));

      expect(container).toHaveTextContent('마법사주방');
      expect(container).toHaveTextContent('서울시');
    });
  });

  context('레스토랑 컨텐츠가 없을 때', () => {
    it('Loading... 이 보여집니다.', () => {
      useSelector.mockImplementation((selector) => selector({}));

      const { container } = render((
        <RestaurantContainer restaurantId="2" />
      ));

      expect(container).toHaveTextContent('Loading...');
    });
  });
});
