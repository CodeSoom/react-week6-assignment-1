import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import HomePage from './HomePage';

test('HomePage', () => {
  const links = ['About', 'Restaurants'];

  const { container } = render((
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  ));

  links.forEach((link) => {
    expect(container).toHaveTextContent(link);
  });
});
