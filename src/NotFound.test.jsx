import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NotFound from './NotFound';

test('NotFound', () => {
  render(
    <MemoryRouter>
      <NotFound />
    </MemoryRouter>,
  );
});
