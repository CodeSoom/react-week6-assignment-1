import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

import regions from '../fixtures/regions';
import categories from '../fixtures/categories';
import restaurants from '../fixtures/restaurants';

describe('App', () => {
  beforeEach(() => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      regions,
      categories,
      restaurants,
    }));
  });

  function renderApp({ path } = {}) {
    return render((
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    ));
  }

  it('renders \'헤더\'', () => {
    const { container } = renderApp();

    expect(container).toHaveTextContent('헤더');
  });

  context('with path /', () => {
    it('reders the home page', () => {
      const { container } = renderApp({ path: '/' });

      expect(container).toHaveTextContent('Home');
    });
  });

  context('with path /about', () => {
    it('reders the about page', () => {
      const { container } = renderApp({ path: '/about' });

      expect(container).toHaveTextContent('About 페이지 입니다.');
    });
  });

  context('with path /restaurants', () => {
    it('reders the restaurants page', () => {
      const { getByText } = renderApp({ path: '/restaurants' });

      regions.forEach((region) => {
        expect(getByText(region.name)).not.toBeNull();
      });

      categories.forEach((category) => {
        expect(getByText(category.name)).not.toBeNull();
      });

      restaurants.forEach((restaurant) => {
        expect(getByText(restaurant.name)).not.toBeNull();
      });
    });
  });

  context('with invalid path', () => {
    it('reders the not found page', () => {
      const { container } = renderApp({ path: '/xxx' });

      expect(container).toHaveTextContent('404 Not Found');
    });
  });
});
