import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import RestaurantsInfoPage from './RestaurantsInfoPage';

test('RestaurantsInfoPage', () => {
  render((
    <MemoryRouter>
      <RestaurantsInfoPage />
    </MemoryRouter>
  ));
});
