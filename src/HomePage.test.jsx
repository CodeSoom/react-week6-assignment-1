import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import HomePage from './HomePage';

test('HomePage', () => {
  const { container, getByTestId } = render((
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  ));

  expect(container).toHaveTextContent('Home');
  expect(getByTestId('about-link')).toBeInTheDocument();
  expect(getByTestId('restaurants-link')).toBeInTheDocument();
});
