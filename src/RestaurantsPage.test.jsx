import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

import RestaurantsPage from './RestaurantsPage';

import REGIONS from '../fixtures/regions';
import CATEGOREIS from '../fixtures/categories';
import RESTAURANTS from '../fixtures/restaurants';

test('RestaurantsPage', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions: REGIONS,
    categories: CATEGOREIS,
    restaurants: RESTAURANTS,
  }));

  const { container } = render((
    <BrowserRouter>
      <RestaurantsPage />
    </BrowserRouter>
  ));

  expect(container).toHaveTextContent('Restaurants');
  expect(container).toHaveTextContent('서울');
});
