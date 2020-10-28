import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import App from './App';

import categories from '../fixtures/categories';
import regions from '../fixtures/regions';
import restaurants from '../fixtures/restaurants';

function renderApp({ path }) {
  return render((
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>
  ));
}

describe('App', () => {
  beforeEach(() => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      categories, regions, restaurants,
    }));
  });

  it('"헤더" 문구가 출력됩니다.', () => {
    const { container } = renderApp({ path: '/' });

    expect(container).toHaveTextContent('헤더');
  });

  context('path가 "/"일 때,', () => {
    it('HomePage의 "Home" 문구가 출력됩니다.', () => {
      const { container } = renderApp({ path: '/' });

      expect(container).toHaveTextContent('Home');
    });
  });

  context('path가 "/about"일 때,', () => {
    it('AboutPage의 "About" 문구가 출력됩니다.', () => {
      const { container } = renderApp({ path: '/about' });

      expect(container).toHaveTextContent('About');
    });
  });

  context('path가 "/restaurants"일 때,', () => {
    it('RestaurantsPage의 regions 목록이 출력됩니다.', () => {
      const { container } = renderApp({ path: '/restaurants' });

      regions.forEach((region) => (
        expect(container).toHaveTextContent(region.name)
      ));
    });

    it('RestaurantsPage의 categories 목록이 출력됩니다.', () => {
      const { container } = renderApp({ path: '/restaurants' });

      categories.forEach((category) => (
        expect(container).toHaveTextContent(category.name)
      ));
    });

    it('RestaurantsPage의 restaurants 목록이 출력됩니다.', () => {
      const { container } = renderApp({ path: '/restaurants' });

      restaurants.forEach((restaurant) => (
        expect(container).toHaveTextContent(restaurant.name)
      ));
    });
  });

  context('path가 "/restaurant/1"일 때,', () => {
    it('AboutPage의 "About" 문구가 출력됩니다.', () => {
      const { container } = renderApp({ path: '/restaurant/1' });

      expect(container).toHaveTextContent('RestaurantDetailPage');
    });
  });

  context('path가 잘못된 url일 때,', () => {
    it('NotFoundPage의 "NotFoundPage" 문구가 출력됩니다.', () => {
      const { container } = renderApp({ path: '/wrong-url' });

      expect(container).toHaveTextContent('NotFoundPage');
    });
  });
});

test('App', () => {
  render((
    <MemoryRouter>
      <App />
    </MemoryRouter>
  ));
});
