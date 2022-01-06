import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import NotFoundPage from './NotFoundPage';

test('NotFoundPage', () => {
  const { container } = render((
    <MemoryRouter>
      <NotFoundPage />
    </MemoryRouter>
  ));

  expect(container).toHaveTextContent('Not');
  expect(container).toHaveTextContent('Found');
  expect(container).toHaveTextContent('404');
});
