import { render } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import RestaurantInfoPage from './RestaurantInfoPage';

import RESTAURANTINFO from '../fixtures/restaurantInfo';

describe('RestaurantInfoPage', () => {
  it('renders restaurant information', () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      restaurantInfo: RESTAURANTINFO,
    }));

    const { container } = render((
      <RestaurantInfoPage />
    ));

    expect(dispatch).toBeCalled();

    expect(container).toHaveTextContent('양천주가');
    expect(container).toHaveTextContent('비빔밥');
  });
});
