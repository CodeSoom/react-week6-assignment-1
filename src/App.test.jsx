import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import App from './App';

function renderPage(path) {
  return render((
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>
  ));
}

describe('App', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      regions: [],
      categories: [],
      restaurants: [],
    }));
  });

  context('with path /', () => {
    it('renders homepage', () => {
      const { container } = renderPage('/');

      expect(container).toHaveTextContent('Home');
      expect(container).toHaveTextContent('헤더');
    });
  });

  context('with path /about', () => {
    it('renders about page', () => {
      const { container } = renderPage('/about');

      expect(container).toHaveTextContent('About');
    });
  });

  context('with path /restaurants', () => {
    it('renders restaurants page', () => {
      const dispatch = jest.fn();

      useDispatch.mockImplementation(() => dispatch);

      const { container } = renderPage('/restaurants');

      expect(container).toHaveTextContent('Restaurants');
    });
  });

  context('with a path that does not exist', () => {
    it('renders error page', () => {
      const { container } = renderPage('/xxx');

      expect(container).toHaveTextContent('404 not found');
    });
  });
});
