import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import regions from '../fixtures/regions';
import categories from '../fixtures/categories';

import App from './App';

jest.mock('react-redux');
jest.mock('./services/api');

test('App', () => {
  const REGION = regions[0];
  const CATEGORY = categories[0];
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    regions,
    categories,
    selectedRegionId: REGION.id,
  }));

  const { container } = render((
    <App />
  ));
  expect(container).toHaveTextContent(REGION.name);
  expect(container).toHaveTextContent(CATEGORY.name);
});
