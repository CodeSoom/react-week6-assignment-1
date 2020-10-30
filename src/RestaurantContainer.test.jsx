import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';

import RESTAURANT from '../fixtures/restaurant';

describe('RestaurantContainer', () => {
  const setState = ({ restaurant, loading }) => {
    useSelector.mockImplementation((selector) => selector({
      restaurantLoading: loading,
      restaurant,
    }));
  };

  context('when restaurant is being loaded', () => {
    beforeEach(() => {
      setState({
        restaurant: {},
        loading: true,
      });
    });

    it('renders loading message', () => {
      const { container } = render(<RestaurantContainer />);

      expect(container).toHaveTextContent('loading');
    });
  });

  context('when restaurant has been loaded', () => {
    beforeEach(() => {
      setState({
        restaurant: RESTAURANT,
        loading: false,
      });
    });

    it('renders restaurant name', () => {
      const { container } = render(<RestaurantContainer />);

      expect(container).toHaveTextContent(RESTAURANT.name);
    });

    it('renders restaurant address', () => {
      const { container } = render(<RestaurantContainer />);

      expect(container).toHaveTextContent(RESTAURANT.address);
    });
  });
});
