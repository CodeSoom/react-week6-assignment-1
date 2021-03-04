import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render, fireEvent } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantsPage from './RestaurantsPage';

import regions from '../fixtures/regions';
import categories from '../fixtures/categories';
import restaurants from '../fixtures/restaurants';

describe('RestaurantsPage', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      regions,
      categories,
      restaurants,
    }));
  });

  it('renders restaurants page', () => {
    const { container, getByText } = render((
      <MemoryRouter>
        <RestaurantsPage />
      </MemoryRouter>
    ));

    expect(container).toHaveTextContent('Restaurants');
    expect(getByText('서울')).not.toBeNull();
    expect(getByText('한식')).not.toBeNull();
  });

  it('goes to restaurant detail page', () => {
    const { container, getByText } = render((
      <MemoryRouter>
        <RestaurantsPage />
      </MemoryRouter>
    ));

    fireEvent.click(getByText('김밥제국'));

    expect(container).toHaveTextContent('Restaurant Information');
  });
});
