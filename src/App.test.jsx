import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import App from './App';

describe('App', () => {
  const renderApp = ({ path }) => render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  );

  context('with path /', () => {
    it('renders home page', () => {
      const { container } = renderApp({ path: '/' });

      expect(container).toHaveTextContent('Home');
      expect(container).toHaveTextContent('About');
      expect(container).toHaveTextContent('Restaurants');
    });
  });

  context('with path /about', () => {
    it('renders about page', () => {
      const { container } = renderApp({ path: '/about' });

      expect(container).toHaveTextContent(/About 페이지/);
    });
  });

  context('with unknown path', () => {
    it('renders Not Found page', () => {
      const { container } = renderApp({ path: '/test' });

      expect(container).toHaveTextContent(/404 - Not Found/);
    });
  });
});
