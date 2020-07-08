import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import RestaurantsPage from './RestaurantsPage';

import REGIONS from '../fixtures/regions';
import CATEGORIES from '../fixtures/categories';
import RESTAURANTS from '../fixtures/restaurants';

jest.mock('react-redux');

describe('RestaurantsPage', () => {
  beforeEach(() => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      regions: REGIONS,
      categories: CATEGORIES,
      restaurants: RESTAURANTS,
    }));
  });
  it('renders RestaurantsPage', () => {
    const { getByText } = render(
      <MemoryRouter>
        <RestaurantsPage />
      </MemoryRouter>,
    );

    expect(getByText('한식')).not.toBeNull();
    expect(getByText('김밥제국')).not.toBeNull();
    expect(getByText('서울')).not.toBeNull();
  });
});
