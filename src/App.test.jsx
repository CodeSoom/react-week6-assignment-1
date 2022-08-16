import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import App from './App';

test('App', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
});

jest.mock('react-redux');

describe('App', () => {
  beforeEach(() => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      regions: [{ id: 1, name: '강원도' }],
      categories: [],
      restaurants: [],
      restaurantDetail: {
        name: '',
        adress: '',
        menuItems: [],
        reviews: [],
      },
    }));

    jest.restoreAllMocks();
  });

  function renderApp({ path }) {
    return render(
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>,
    );
  }

  context('with path /', () => {
    it('render HomePage', () => {
      const { container } = renderApp({ path: '/' });

      expect(container).toHaveTextContent('Home');
    });
  });

  context('with path /restaurants', () => {
    it('render RestaurantsPage', () => {
      const { container } = renderApp({ path: '/restaurants' });

      expect(container).toHaveTextContent('강원도');
    });
  });

  context('with path /about', () => {
    it('render AboutPage', () => {
      const { container } = renderApp({ path: '/about' });

      expect(container).toHaveTextContent('About');
    });
  });

  context('with path /restaurant-detail', () => {
    it('render RestaurantDetailPage', () => {
      const { container } = renderApp({ path: '/restaurant-detail' });

      expect(container).toHaveTextContent('로딩중');
      // 상세정보 데이터를 받아온 후에 상세정보 텍스트가 보이는지 확인하고 싶은데 이떄 방법은? 
      // expect(container).toHaveTextContent('상세정보');
    });
  });
});
