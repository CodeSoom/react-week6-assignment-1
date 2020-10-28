import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import App from './App';

describe('App', () => {
  const renderApp = () => render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );

  it('renders App', () => {
    const { container } = renderApp();

    expect(container).toHaveTextContent('Home');
    expect(container).toHaveTextContent('About');
    expect(container).toHaveTextContent('Restaurants');
  });
});
