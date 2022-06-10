import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Header from './Header';

test('Header', () => {
  const { getByRole } = render((
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  ));

  expect(getByRole('heading', { level: 1 })).toHaveTextContent('헤더');
});
