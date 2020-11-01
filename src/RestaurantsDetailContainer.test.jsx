import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantsDetailContainer from './RestaurantsDetailContainer';

describe('RestaurantsDetailContainer', () => {
  context('have right restaurantId for loading', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        restaurant: {
          id: 1,
          name: 'name',
          address: 'address',
          menuItems: [],
        },
        loading: true,
      }));
    });

    it('show Restaurant Loading', () => {
      const { container } = render((
        <RestaurantsDetailContainer />
      ));

      expect(container).toHaveTextContent('Loading...');
    });

    context('have right restaurantId for showing', () => {
      beforeEach(() => {
        useSelector.mockImplementation((selector) => selector({
          restaurant: {
            id: 1,
            name: 'name',
            address: 'address',
            menuItems: [],
          },
          loading: false,
        }));
      });
      it('show Restaurant Detail', () => {
        const { container } = render((
          <RestaurantsDetailContainer />
        ));

        expect(container).not.toBeNull();
      });
    });
  });
});
