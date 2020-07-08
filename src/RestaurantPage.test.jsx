import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';
import RestaurantPage from './RestaurantPage';

import RESTAURANT from '../fixtures/restaurant';

describe('RestaurantPage', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector(({
      restaurant: RESTAURANT,
    })));
  });

  context('레스토랑 id가 있으면', () => {
    it('해당 레스토랑 정보를 보여준다.', () => {
      const { getByText } = render((
        <RestaurantPage />
      ));

      expect(getByText(RESTAURANT.name)).toBeInTheDocument();
      expect(getByText(`주소: ${RESTAURANT.address}`)).toBeInTheDocument();
    });
  });
});
