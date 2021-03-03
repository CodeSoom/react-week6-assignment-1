import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import App from './App';

function renderApp({ path }) {
  return render((
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>));
}

describe('App', () => {
  beforeEach(() => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      regions: [],
      categories: [],
      restaurants: [],
    }));
  });

  context('when URL is /', () => {
    it('show HomePage', () => {
      const { container } = renderApp({ path: '/' });
      expect(container).toHaveTextContent('Home');
    });
  });

  context('when URL is /about', () => {
    it('show AboutPage', () => {
      const { container } = renderApp({ path: '/about' });
      expect(container).toHaveTextContent('About');
    });
  });
  context('when URL is /restaurants', () => {
    it('show RestaurantsPage', () => {
      const { container } = renderApp({ path: '/restaurants' });
      expect(container).toHaveTextContent('restaurants');
    });
  });

  context('when URL is invalid', () => {
    it('show NotFoundPage', () => {
      const { container } = renderApp({ path: '/xxx' });
      expect(container).toHaveTextContent('404');
    });
  });
});
