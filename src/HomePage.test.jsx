import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import HomePage from './HomePage';

test('HomePage', () => {
  const { queryByText } = render((
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  ));

  expect(queryByText(/About/)).not.toBeNull();
});
