import React from 'react';
import {
  MemoryRouter,
} from 'react-router-dom';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantPage from './RestaurantPage';

import RESTAURANT from '../fixtures/restaurant';

const customRender = () => render((
  <MemoryRouter>
    <RestaurantPage />
  </MemoryRouter>
));

describe('RestaurantPage', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      restaurant: RESTAURANT,
    }));
  });

  context('with a restaurant', () => {
    it('shows detailed info of the restaurant', () => {
      const { queryByText } = customRender('/restaurant');

      expect(queryByText('한국식 초밥')).not.toBeNull();
      expect(queryByText('주소:서울 강남구')).not.toBeNull();
      expect(queryByText('메뉴')).not.toBeNull();
      expect(queryByText('밥')).not.toBeNull();
    });
  });
});
