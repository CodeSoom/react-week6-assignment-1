import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetailContainer from './RestaurantDetailContainer';

import restaurantDetail from '../../fixtures/restaurantDetail';

jest.mock('react-redux');

describe('RestaurantDetailContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  const restaurantId = restaurantDetail.id;

  context('when data is not loading yet', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        restaurantDetail: null,
      }));
    });

    it('renders \'loading...\'', () => {
      const { container } = render(
        <RestaurantDetailContainer
          restaurantId={restaurantId}
        />,
      );

      expect(container).toHaveTextContent('loading...');
    });
  });

  context('when data is loading', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        restaurantDetail,
      }));
    });

    it('loads restaurant detail from API', () => {
      render(
        <RestaurantDetailContainer
          restaurantId={restaurantId}
        />,
      );

      expect(dispatch).toBeCalled();
    });
  });
});
