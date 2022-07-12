import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import HomePage from './HomePage';

describe('HomePage', () => {
  function renderHomePage() {
    return render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    );
  }
  it('renders HomePage', () => {
    const { container } = renderHomePage();

    expect(container).toHaveTextContent('Home');
  });
});
