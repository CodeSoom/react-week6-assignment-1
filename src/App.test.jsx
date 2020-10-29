import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import App from './App';

describe('App', () => {
  function renderApp({ path }) {
    return render(
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>,
    );
  }

  context('with path "/"', () => {
    it('renders home page', () => {
      const { container } = renderApp({ path: '/' });

      expect(container).toHaveTextContent('헤더');
      expect(container).toHaveTextContent('Home');
    });
  });

  context('with path /about', () => {
    it('shows header and page name', () => {
      const { container } = renderApp({ path: '/about' });

      expect(container).toHaveTextContent('헤더');
      expect(container).toHaveTextContent('About');
    });
  });
});
