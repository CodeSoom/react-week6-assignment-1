import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import regions from '../fixtures/regions';
import categories from '../fixtures/categories';
import restaurants from '../fixtures/restaurants';
import restaurant from '../fixtures/restaurant';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions,
    categories,
    restaurants,
    restaurant,
  }));

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

  context('with path /restaurants', () => {
    it('renders restaurants page', () => {
      const { container } = renderApp({ path: '/restaurants' });

      expect(container).toHaveTextContent(/서울/);
      expect(container).toHaveTextContent(/한식/);
    });
  });

  context('with path /restaurants/:id', () => {
    it('renders restaurant page', () => {
      const { container } = renderApp({ path: '/restaurants/1' });

      expect(container).toHaveTextContent(/양천주가/);
    });
  });

  context('with unknown path', () => {
    it('renders Not Found page', () => {
      const { container } = renderApp({ path: '/test' });

      expect(container).toHaveTextContent(/404 - Not Found/);
    });
  });
});
