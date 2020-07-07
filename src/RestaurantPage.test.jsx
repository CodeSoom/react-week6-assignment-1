import React from 'react';

import { render } from '@testing-library/react';

import RestaurantPage from './RestaurantPage';

import RESTAURANT from '../fixtures/restaurant';

describe('RestaurantPage', () => {
  const SEOUL_KOREAN_RESTAURANT = RESTAURANT[0];

  context('레스토랑 id가 있으면', () => {
    it('해당 레스토랑 정보를 보여준다.', () => {
      const { getByText } = render((
        <RestaurantPage />
      ));

      expect(getByText(SEOUL_KOREAN_RESTAURANT.name)).toBeInTheDocument();
      expect(getByText(SEOUL_KOREAN_RESTAURANT.address)).toBeInTheDocument();
    });
  });
});
