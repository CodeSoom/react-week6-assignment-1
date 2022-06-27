import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Homepage from './Homepage';

test('Homepage', () => {
  render(
    <MemoryRouter>
      <Homepage />
    </MemoryRouter>,
  );
});
