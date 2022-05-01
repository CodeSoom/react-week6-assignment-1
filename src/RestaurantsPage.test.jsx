import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantsPage from './RestaurantsPage';

test('RestaurantsPage', () => {
  useSelector.mockImplementation((selector) => selector({
    regions: [],
    categories: [],
    restaurants: [],
  }));

  const { container, queryAllByText } = render((
    <RestaurantsPage />
  ));

  expect(queryAllByText('서울')).not.toBeNull();
  expect(queryAllByText('한식')).not.toBeNull();

  expect(container).toHaveTextContent('Restaurants');
});
