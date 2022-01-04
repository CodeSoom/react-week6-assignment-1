import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';
import RestaurantsPage from './RestaurantsPage';

import REGIONS from '../../fixtures/regions';
import CATEGORIES from '../../fixtures/categories';

jest.mock('react-redux');
describe('RestaurantsPage', () => {
  const dispatch = jest.fn();

  const SEOUL = REGIONS[0];
  const KOREAN_FOOD = CATEGORIES[0];

  useDispatch.mockImplementation(() => dispatch);

  it('renders RegionsContainer/CategoriesContainer/RestaurantsContainer', () => {
    useSelector.mockImplementation((selector) => selector({
      regions: REGIONS,
      selectedRegion: SEOUL,
      categories: CATEGORIES,
      selectedCategory: KOREAN_FOOD,
      restaurants: [
        { id: 1, name: '마법사주방' },
      ],
    }));

    render((
      <MemoryRouter>
        <RestaurantsPage />
      </MemoryRouter>
    ));
  });
});
