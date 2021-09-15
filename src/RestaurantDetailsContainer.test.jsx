import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantDetailsContainer from './RestaurantDetailsContainer';

describe('RestaurantDetailsContainer', () => {
  context('without information about a restaurant', () => {
    useSelector.mockImplementation((selector) => selector({
      restaurantDetails: null,
    }));

    it('renders on loading message', () => {
      const { container } = render((
        <RestaurantDetailsContainer />
      ));

      expect(container).toHaveTextContent('Loading');
    });
  });
});
