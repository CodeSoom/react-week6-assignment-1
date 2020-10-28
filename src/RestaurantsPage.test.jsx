import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantsPage from './RestaurantsPage';

import regions from '../fixtures/regions';
import categories from '../fixtures/categories';
import restaurants from '../fixtures/restaurants';

jest.mock('react-redux');

describe('RestaurantsPage', () => {
  useSelector.mockImplementation((selector) => selector({
    regions,
    categories,
    restaurants,
  }));

  it('show regions and categories ', () => {
    const { container } = render((
      <RestaurantsPage />
    ));

    expect(container).toHaveTextContent('서울');
    expect(container).toHaveTextContent('한식');
  });
});
