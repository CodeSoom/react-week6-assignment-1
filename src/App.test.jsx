import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import App from './App';

function renderApp({ path }) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  );
}

describe('path="/"', () => {
  it('HomePage가 보임', () => {
    const { container } = renderApp({ path: '/' });

    expect(container).toHaveTextContent('Home');
  });
});

describe('path="/about"', () => {
  it('AboutPage가 보임', () => {
    const { container } = renderApp({ path: '/about' });

    expect(container).toHaveTextContent('About');
  });
});

describe('path="/restaurants"', () => {
  it('RestaurantsPage 보임', () => {
    const { container } = renderApp({ path: '/restaurants' });

    expect(container).toHaveTextContent('Restaurants');
  });
});

describe('path="/restaurants/1"', () => {
  it('RestaurantDetailPage가 보임', () => {
    const { container } = renderApp({ path: '/restaurants/1 ' });

    expect(container).toHaveTextContent('주소');
    expect(container).toHaveTextContent('메뉴');
  });
});

describe('잘못된 path명일 때', () => {
  it('NotFoundPage가 보임', () => {
    const { container } = renderApp({ path: '/codezoom' });

    expect(container).toHaveTextContent('404 Not Found');
  });
});
