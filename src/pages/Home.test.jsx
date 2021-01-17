import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

test('Home', () => {
  const { container, getByText } = render((
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  ));

  expect(getByText('Home')).not.toBeNull();
  expect(container).toHaveTextContent('Home');
  expect(container).toHaveTextContent('About');
  expect(container).toHaveTextContent('Restaurants');
});
