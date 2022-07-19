import { render } from '@testing-library/react';

import { useParams } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { RESTAURANT } from '@fixtures';

import { loadRestaurant } from '@/store/async-actions';

import RestaurantContainer from './RestaurantContainer';

jest.mock('react-router-dom');
jest.mock('@/store/async-actions');

describe('RestaurantContainer', () => {
  const dispatch = jest.fn();

  useParams.mockReturnValue({ restaurantId: RESTAURANT.id });

  useDispatch.mockReturnValue(dispatch);

  const mockSelector = ({ isLoading }) => {
    useSelector.mockImplementation((state) => state({
      restaurant: RESTAURANT,
      isLoading,
    }));
  };

  const renderRestaurantContainer = () => render(<RestaurantContainer />);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  context('with loading', () => {
    it('renders loading view', () => {
      mockSelector({ isLoading: true });

      const { container } = renderRestaurantContainer();

      expect(container).toHaveTextContent('로딩 중');
    });
  });

  context('without loading', () => {
    it('renders restaurant', () => {
      mockSelector({ isLoading: false });

      const { container } = renderRestaurantContainer();

      expect(dispatch).toHaveBeenCalledWith(loadRestaurant({ restaurantId: RESTAURANT.id }));
      expect(container).toHaveTextContent(RESTAURANT.name);
      expect(container).toHaveTextContent(RESTAURANT.address);
    });
  });
});
