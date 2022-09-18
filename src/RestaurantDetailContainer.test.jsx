import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetailContainer from './RestaurantDetailContainer';

import restaurantDetail from '../fixtures/restaurantDetail';

jest.mock('react-redux');

describe('RestaurantDetailContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  context('without restaurantDetail', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        restaurantDetail: null,
      }));
    });

    it('renders \'loading...\'', () => {
      const { container } = render(<RestaurantDetailContainer />);

      expect(container).toHaveTextContent('loading...');
    });
  });

  context('with restaurantDetail', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        restaurantDetail,
      }));
    });

    it('loads restaurant detail from API', () => {
      render(<RestaurantDetailContainer />);

      expect(dispatch).toBeCalled();
    });

    it('renders restaurant details', () => {
      const { getByText } = render(<RestaurantDetailContainer />);

      expect(getByText(restaurantDetail.name)).not.toBeNull();
    });
  });
});
