import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { render } from '@testing-library/react';

import RestaurantsPage from './RestaurantsPage';

import regions from '../fixtures/regions';
import categories from '../fixtures/categories';
import restaurants from '../fixtures/restaurants';

test('RestaurantsPage', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions,
    categories,
    restaurants,
  }));

  const { queryByText } = render((
    <RestaurantsPage />
  ));

  expect(dispatch).toBeCalled();

  expect(queryByText('서울')).not.toBeNull();
  expect(queryByText('한식')).not.toBeNull();
  expect(queryByText('김밥천국')).not.toBeNull();
});
