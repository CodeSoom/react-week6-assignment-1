import { render } from '@testing-library/react';
import { useDispatch } from 'react-redux';

import RestaurantContainer from '.';

jest.mock('react-redux');

describe('RestaurantContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
  });

  function renderRestaurantContainer() {
    return render((
      <RestaurantContainer restaurantId="1" />
    ));
  }

  it('loads restaurant', () => {
    renderRestaurantContainer();

    expect(dispatch).toBeCalled();
  });
});
