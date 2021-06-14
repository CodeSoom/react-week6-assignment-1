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

  it('renders Home', () => {
    const { container } = renderHomePage();

    expect(container).toHaveTextContent('Home');
  });

  it('renders About Link', () => {
    const { container } = renderHomePage();

    expect(container).toHaveTextContent('About');
  });

  it('renders Restaurants Link', () => {
    const { container } = renderHomePage();

    expect(container).toHaveTextContent('Restaurants');
  });
});
