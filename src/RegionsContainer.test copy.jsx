import React from 'react';

import { render } from '@testing-library/react';

import RestaurantsContainer from './RestaurantsContainer';
\
import restaurants from '../fixtures/restaurants';

import { useDispatch, useSelector } from 'react-redux';


jest.mock('react-redux');

describe('RestaurantsContainer', () => {
  const RESTAURANT = restaurants[0];
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector(
    {
      restaurants,
      selectedRegionId: REGION.id,
      selectedCategoryId: CATEGORY.id,
    }
  ));

  const { getByText } = render((
    <RestaurantsContainer />
  ));
  
  expect(getByText(`${RESTAURANT.name}(v)`)).not.toBeNull();
});
