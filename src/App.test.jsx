import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      regions: [
        { id: 1, name: '서울' },
      ],
      categories: [
        { id: 1, name: '한식' },
      ],
      restaurants: [
        { id: 1, name: '마법사주방' },
      ],
      restaurantDetail: {
        id: 1,
        name: '마법사주방',
        address: '서울시 강남구',
        menuItems: [
          { id: 1, name: '탕수육' },
        ],
      },
    }));
  });

  function renderApp({ path }) {
    return render(
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>,
    );
  }

  context('with path /', () => {
    it('HomePage가 렌더된다.', () => {
      const { container } = renderApp({ path: '/' });

      expect(container).toHaveTextContent('헤더');
      expect(container).toHaveTextContent('Home');
    });
  });

  context('with path /restaurants', () => {
    it('RestaurantsPage가 렌더된다.', () => {
      const { container } = renderApp({ path: '/restaurants' });

      expect(container).toHaveTextContent('서울');
      expect(container).toHaveTextContent('한식');
      expect(container).toHaveTextContent('마법사주방');
    });
  });

  context('with path /restaurants/1', () => {
    it('RestaurantsDetailPage가 렌더된다.', () => {
      const { container } = renderApp({ path: '/restaurants/1' });

      expect(container).toHaveTextContent('마법사주방');
      expect(container).toHaveTextContent('서울시 강남구');
      expect(container).toHaveTextContent('탕수육');
    });
  });

  context('with path /about', () => {
    it('AboutPage가 렌더된다.', () => {
      const { container } = renderApp({ path: '/about' });

      expect(container).toHaveTextContent('About');
    });
  });

  context('with invalid path', () => {
    it('NotFoundPage가 렌더된다.', () => {
      const { container } = renderApp({ path: '/any_not_exist_url' });

      expect(container).toHaveTextContent('Not Found');
    });
  });
});
