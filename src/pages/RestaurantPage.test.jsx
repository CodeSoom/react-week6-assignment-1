import { render } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import RestaurantPage from './RestaurantPage';
import RESTAURANT from '../../fixtures/restaurant';

describe('RestaurantPage', () => {
  const dispatch = jest.fn();
  const renderRestaurantPage = () => render(<RestaurantPage />);

  it('식당 정보를 보여준다.', () => {
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      restaurant: RESTAURANT,
    }));

    const { getByText } = renderRestaurantPage();

    expect(getByText(RESTAURANT.name)).not.toBeNull();
  });
});
