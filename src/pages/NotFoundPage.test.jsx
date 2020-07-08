import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import NotFoundPage from './NotFoundPage';

test('NotFoundPage', () => {
  const { queryByText } = render((
    <MemoryRouter initialEntries={['/any_not_exist_url']}>
      <NotFoundPage />
    </MemoryRouter>
  ));

  expect(queryByText('404 Not Found')).not.toBeNull();
});
