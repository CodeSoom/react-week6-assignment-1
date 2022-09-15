import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import HomePage from './HomePage';

test('HomePage', () => {
  const { getAllByRole } = render((
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  ));

  const linkList = getAllByRole('link');
});
