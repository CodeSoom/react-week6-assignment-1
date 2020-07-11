import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantPage from './RestaurantPage';

import RESTAURANT from '../fixtures/restaurant';

describe('RestaurantPage', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  context('when loading', () => {
    beforeEach(() => {
      useSelector.mockImplementation(
        (selector) => selector({ restaurant: {}, loading: true }),
      );
    });

    it('renders loading text', () => {
      const { queryByText } = render((
        <RestaurantPage
          match={{ params: { id: 1 } }}
        />
      ));

      expect(queryByText('Loading...')).not.toBeNull();
    });
  });

  context('when not loading', () => {
    beforeEach(() => {
      useSelector.mockImplementation(
        (selector) => selector({ restaurant: RESTAURANT, loading: false }),
      );
    });

    it('renders the restaurant details', () => {
      const { queryByText } = render((
        <RestaurantPage
          match={{ params: { id: 1 } }}
        />
      ));

      expect(dispatch).toBeCalled();

      expect(queryByText('양천주가')).not.toBeNull();
      expect(queryByText('서울 강남구')).not.toBeNull();
      expect(queryByText('탕수육')).not.toBeNull();
      expect(queryByText('팔보채')).not.toBeNull();
    });
  });
});
