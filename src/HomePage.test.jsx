import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import HomePage from './HomePage';

function renderHomePage() {
  return (
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    )
  );
}

test('HomePage', () => {
  const { queryByText } = renderHomePage();

  expect(queryByText('Home')).not.toBeNull();
  expect(queryByText('About')).not.toBeNull();
  expect(queryByText('Restaurants')).not.toBeNull();
});
