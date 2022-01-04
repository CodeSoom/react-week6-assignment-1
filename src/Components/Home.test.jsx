import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

test('renders Home', () => {
  const { queryByText } = render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>,
  );
  expect(queryByText('Home')).not.toBeNull();
  expect(queryByText('Restaurants')).not.toBeNull();
});
