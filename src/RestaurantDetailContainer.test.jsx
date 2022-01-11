import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import RestaurantDetailContainer from './RestaurantDetailContainer';

describe('RestaurantDetailContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    useDispatch.mockImplementation(() => dispatch);
  });

  context('when restaurant is null', () => {
    it('renders Loader', () => {
      useSelector.mockImplementation((selector) => selector({
        restaurant: null,
      }));

      const { getByText } = render(
        <RestaurantDetailContainer restaurantId={1} />,
      );

      expect(getByText(/Loading.../)).not.toBeNull();
    });
  });

  context('when restaurant is not null', () => {
    it('renders Restaurant', () => {
      useSelector.mockImplementation((selector) => selector({
        restaurant: {
          name: '양천주가',
          address: '서울시 강남구',
          menuItems: [
            { id: 1, name: '비빔밥' },
          ],
        },
      }));

      const { getByText } = render(
        <RestaurantDetailContainer restaurantId={1} />,
      );

      expect(getByText(/양천주가/)).not.toBeNull();
      expect(getByText(/비빔밥/)).not.toBeNull();
    });
  });
});
