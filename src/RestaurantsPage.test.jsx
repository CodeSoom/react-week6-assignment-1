import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import RestaurantsPage from './RestaurantsPage';

describe('RestaurantsPage', () => {
  it('renders the home page', () => {
    render((
      <MemoryRouter>
        <RestaurantsPage />
      </MemoryRouter>
    ));
  });
});
