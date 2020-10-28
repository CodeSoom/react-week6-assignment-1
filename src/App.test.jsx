import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import RESTAURANTS from '../fixtures/restaurants';
import RESTAURANT from '../fixtures/restaurant';

import App from './App';

describe('App', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      regions: [{ id: 1, name: '서울' }],
      categories: [],
      restaurants: RESTAURANTS,
      restaurant: RESTAURANT,
    }));
  });

  function renderApp(path) {
    if (!path) {
      return render((
        <MemoryRouter>
          <App />
        </MemoryRouter>
      ));
    }

    return render((
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    ));
  }

  it('renders Header', () => {
    const { container } = renderApp();

    expect(container).toHaveTextContent('헤더');
  });

  context('with path /', () => {
    const path = '/';

    it('renders HomePage', () => {
      const { container } = renderApp(path);

      expect(container).toHaveTextContent('Home');
    });
  });

  context('with path /restaurants', () => {
    const path = '/restaurants';

    it('renders RestaurantsPage', () => {
      const { container } = renderApp(path);

      expect(container).toHaveTextContent('서울');
    });
  });

  context('with path /about', () => {
    const path = '/about';

    it('renders AboutPage', () => {
      const { container } = renderApp(path);

      expect(container).toHaveTextContent('이 페이지는 소개 페이지 입니다.');
    });
  });

  context('with path /restaurants/restaurantId ', () => {
    const path = '/restaurants/1';

    it('renders RestaurantPage', () => {
      const { container } = renderApp(path);

      expect(container).toHaveTextContent('양천주가');
    });
  });

  context('with invalid path ', () => {
    const path = '/www';

    it('renders NotFoundPage', () => {
      const { container } = renderApp(path);

      expect(container).toHaveTextContent('Not Found');
    });
  });
});
