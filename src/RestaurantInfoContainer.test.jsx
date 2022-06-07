import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import RestaurantInfoContainer from './RestaurantInfoContainer';

import RESTAURANTINFO from '../fixtures/restaurantInfo';

describe('RestaurantInfoContainer', () => {
  it('renders restaurant information', () => {
    useSelector.mockImplementation((selector) => selector({
      restaurantInfo: RESTAURANTINFO,
    }));

    const { container } = render((
      <RestaurantInfoContainer />
    ));

    expect(container).toHaveTextContent('양천주가');
    expect(container).toHaveTextContent('비빔밥');
  });
});
