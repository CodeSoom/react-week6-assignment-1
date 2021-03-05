import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import regions from '../fixtures/regions';

import App from './App';

jest.mock('react-redux');

test('App', () => {
  const REGION = regions[0];
  useSelector.mockImplementation((selector) => selector({
    regions,
    selectedRegionId: REGION.id,
  }));

  const { container } = render((
    <App />
  ));
  expect(container).toHaveTextContent(REGION.name);
});
