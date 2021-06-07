import React from 'react';

import { render } from '@testing-library/react';

import HomePage from './HomePage';

test('HomePage', () => {
  const { getByText }= render((
    <HomePage />
  ));

  expect(getByText('헤더')).not.toBeNull();

  expect(getByText('Home')).not.toBeNull();
  expect(getByText('Home')).toContainHTML('h2');

  expect(getByText('About')).not.toBeNull();
  expect(getByText('About')).toContainHTML('a');
  expect(getByText('About')).toHaveAttribute('href', '/about');

  expect(getByText('Restaurants')).not.toBeNull();
  expect(getByText('Restaurants')).toContainHTML('a');
  expect(getByText('Restaurants')).toHaveAttribute('href', '/restaurants');
});
