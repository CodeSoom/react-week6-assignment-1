import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import About from './About';

test('About', () => {
  render(
    <MemoryRouter>
      <About />
    </MemoryRouter>,
  );
});
