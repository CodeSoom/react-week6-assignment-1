import React from 'react';

import { render } from '@testing-library/react';

import HomePage from './HomePage';

test('HomePage', () => {
  const { getByText }= render((
    <HomePage />
  ));

  expect(getByText('About')).not.toBeNull();
  expect(getByText('Restaurants')).not.toBeNull();
});
