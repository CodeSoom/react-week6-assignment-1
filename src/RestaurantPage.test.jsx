import { render, waitFor } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import RestaurantPage from './RestaurantPage';

test('RestaurantPage', async () => {
  const { container } = render((
    <MemoryRouter initialEntries={['/restaurants/1']}>
      <RestaurantPage />
    </MemoryRouter>
  ));

  expect(container).toHaveTextContent('Loading');

  await waitFor(() => expect(container).toHaveTextContent('양천주가'), { timeout: 100 });
});
