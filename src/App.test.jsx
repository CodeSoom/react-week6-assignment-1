import React from 'react';

import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import App from './App';

import regions from '../fixtures/regions';
import categories from '../fixtures/categories';
import restaurants from '../fixtures/restaurants';

describe('App', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      regions,
      categories,
      restaurants,
    }));
    useDispatch.mockImplementation(() => dispatch);
  });

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

  context('with path "/about"', () => {
    it('renders about page', () => {
      const { container } = renderApp({ path: '/about' });

      expect(container).toHaveTextContent('헤더');
      expect(container).toHaveTextContent('About');
    });
  });

  context('with path "/restaurants"', () => {
    it('renders restaurants page', () => {
      const { container } = renderApp({ path: '/restaurants' });

      expect(container).toHaveTextContent('헤더');
      expect(container).toHaveTextContent('서울');

      expect(dispatch).toBeCalled();
    });
  });

  context('with path "/restaurants/:restaurantId"', () => {
    it('renders restaurant detail page', () => {
      const { container } = renderApp({ path: '/restaurants/1' });

      expect(container).toHaveTextContent('헤더');
      expect(container).toHaveTextContent('양천주가');
    });
  });

  context('with invalid path', () => {
    it('renders not found page', () => {
      const { container } = renderApp({ path: '/notExistPage' });

      expect(container).toHaveTextContent('404 Not Found');
    });
  });
});
