import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import HomePage from './HomePage';

jest.mock('./AboutPage');
jest.mock('./RestaurantsPage');

function renderHomePage() {
  return render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>,
  );
}

describe('HomePage', () => {
  it('shows text "Home"', () => {
    const { container } = renderHomePage();

    expect(container).toHaveTextContent('Home');
  });

  it('shows clickable links', () => {
    const { container } = renderHomePage();

    expect(container).toHaveTextContent('About');
    expect(container).toHaveTextContent('Restaurants');
  });
});
