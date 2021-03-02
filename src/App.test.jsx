import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

const renderApp = ({ path }) => (render((
  <MemoryRouter initialEntries={[path]}>
    <App />
  </MemoryRouter>
)));

describe('App', () => {
  beforeEach(() => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      regions: [
        { id: 1, name: '서울' },
      ],
      categories: [],
      restaurants: [],
    }));
  });
  context('with path /', () => {
    it('renders the Home page', () => {
      const { container } = renderApp({
        path: '/',
      });

      expect(container).toHaveTextContent('Home');
    });
  });
  context('with path /about', () => {
    it('renders the about page', () => {
      const { container } = renderApp({
        path: '/about',
      });

      expect(container).toHaveTextContent('About');
    });
  });
  context('with path /restaurants', () => {
    it('renders the restaurants page', () => {
      const { container } = renderApp({
        path: '/restaurants',
      });

      expect(container).toHaveTextContent('서울');
    });
  });

  context('with invalid path', () => {
    it('renders the not found page', () => {
      const { container } = renderApp({
        path: '/xxx',
      });

      expect(container).toHaveTextContent('Not Found');
    });
  });
});
