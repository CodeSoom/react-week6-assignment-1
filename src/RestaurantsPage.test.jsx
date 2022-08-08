import React from 'react';
import {
  MemoryRouter,
} from 'react-router-dom';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantsPage from './RestaurantsPage';

const customRender = (path) => render((
  <MemoryRouter initialEntries={[path]}>
    <RestaurantsPage />
  </MemoryRouter>
));

describe('RestaurantsPage', () => {
  context('with path /restaurants', () => {
    beforeEach(() => {
      jest.clearAllMocks();

      const dispatch = jest.fn();
      useDispatch.mockImplementation(() => dispatch);

      useSelector.mockImplementation((selector) => selector({
        regions: [
          { id: 1, name: '서울' },
        ],
        categories: [
          { id: 1, name: '한식' },
        ],
        restaurants: [
          { id: 1, name: '한국식 초밥' },
        ],
      }));
    });

    it('shows regions', () => {
      const { queryByText } = customRender('/restaurants');

      expect(queryByText('서울')).not.toBeNull();
    });

    it('shows categories', () => {
      const { queryByText } = customRender('/restaurants');

      expect(queryByText('한식')).not.toBeNull();
    });
  });
});
