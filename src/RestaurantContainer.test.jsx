import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';

import RESTAURANT from '../fixtures/restaurant';

describe('RestaurantContainer', () => {
  const setState = ({ restaurant }) => {
    useSelector.mockImplementation((selector) => selector({
      restaurant,
    }));
  };

  context('when restaurant is being loaded', () => {
    beforeEach(() => {
      setState({
        restaurant: null,
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

    it('renders restaurant', () => {
      const { container } = render(<RestaurantContainer />);

      expect(container).toHaveTextContent(RESTAURANT.name);
    });
  });
});
