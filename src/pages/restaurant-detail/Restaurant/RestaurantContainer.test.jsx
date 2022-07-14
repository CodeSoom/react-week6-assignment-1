import { render } from '@testing-library/react';

import { useParams } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import RESTAURANT from '../../../../fixtures/restaurant';

import { loadRestaurant } from '../../../store/async-actions';

import RestaurantContainer from './RestaurantContainer';

jest.mock('react-router-dom');
jest.mock('../../../store/async-actions');

describe('RestaurantContainer', () => {
  const dispatch = jest.fn();

  useParams.mockReturnValue({ restaurantId: RESTAURANT.id });

  useDispatch.mockReturnValue(dispatch);

  useSelector.mockImplementation((state) => state({
    restaurant: RESTAURANT,
  }));

  it('renders fetched restaurant', () => {
    const { container } = render((
      <RestaurantContainer />
    ));

    expect(dispatch).toHaveBeenCalledWith(loadRestaurant({ restaurantId: RESTAURANT.id }));
    expect(container).toHaveTextContent(RESTAURANT.name);
    expect(container).toHaveTextContent(RESTAURANT.address);
  });
});
