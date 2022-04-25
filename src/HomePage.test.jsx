import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import HomePage from './HomePage';

describe('HomePage', () => {
  function renderHomePage() {
    return render((
      <MemoryRouter initialEntries={['/']}>
        <HomePage />
      </MemoryRouter>
    ));
  }

  it('renders title and links to About and Restaurants', () => {
    const { container } = renderHomePage();

    expect(container).toHaveTextContent('Home');

    expect(container).toHaveTextContent('About');
    expect(container).toHaveTextContent('Restaurants');
  });

  it('renders a link to /about', () => {
    const { getByText } = renderHomePage();

    expect(getByText('About')).toHaveAttribute('href', '/about');
  });

  it('renders a link to /restaurants', () => {
    const { getByText } = renderHomePage();

    expect(getByText('Restaurants')).toHaveAttribute('href', '/restaurants');
  });
});
