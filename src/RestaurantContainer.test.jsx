import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';

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
});
