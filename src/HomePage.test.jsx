import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import HomePage from './HomePage';

test('Hompage', () => {
  render((
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  ));
});
