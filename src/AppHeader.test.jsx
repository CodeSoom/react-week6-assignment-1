import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import AppHeader from './AppHeader';

test('AppHeader', () => {
  const { container } = render((
    <MemoryRouter>
      <AppHeader />
    </MemoryRouter>
  ));

  expect(container).toHaveTextContent('Home');
});
