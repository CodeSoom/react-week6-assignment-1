import { render } from '@testing-library/react';

import HomePage from './HomePage';

jest.mock('./AboutPage');
jest.mock('./RestaurantsPage');

function renderHomePage() {
  return render(
    <HomePage />,
  );
}

describe('HomePage', () => {
  it('contains text "Home"', () => {
    const { container } = renderHomePage();

    expect(container).toHaveTextContent('Home');
  });

  it('contains clickable links', () => {
    const { container } = renderHomePage();

    expect(container).toHaveTextContent('About');
    expect(container).toHaveTextContent('Restaurants');
  });
});
