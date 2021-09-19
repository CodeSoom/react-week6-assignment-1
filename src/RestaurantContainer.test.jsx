import { cleanup, render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';

describe('RestaurantContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
  });

  afterEach(cleanup);

  context('with restaurant', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        restaurant: {
          id: 1,
          name: '마법사주방',
          address: '서울시 강남구',
        },
      }));
    });

    it('renders name and address', () => {
      const { container } = render((
        <RestaurantContainer restaurantId="1" />
      ));

      expect(container).toHaveTextContent('마법사주방');
      expect(container).toHaveTextContent('서울시 강남구');
    });
  });

  context('without restaurant', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        restaurant: null,
      }));
    });

    it('renders Loading', () => {
      const { container } = render((
        <RestaurantContainer restaurantId="1" />
      ));

      expect(container).toHaveTextContent('Loading...');
    });
  });
});
