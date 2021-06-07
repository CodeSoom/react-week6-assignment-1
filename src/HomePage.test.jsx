import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router';

import HomePage from './HomePage';

test('HomePage', () => {
  const { getByText }= render((
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  ));

  expect(getByText('Home')).not.toBeNull();
  expect(getByText('Home')).toContainHTML('h2');

  expect(getByText('About')).not.toBeNull();
  expect(getByText('About').closest('a')).toContainHTML('a');
  expect(getByText('About').closest('a')).toHaveAttribute('href', '/about');

  expect(getByText('Restaurants')).not.toBeNull();
  expect(getByText('Restaurants').closest('a')).toContainHTML('a');
  expect(getByText('Restaurants').closest('a')).toHaveAttribute('href', '/restaurants');
});
