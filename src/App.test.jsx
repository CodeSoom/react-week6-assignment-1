import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import App from './App';

function renderApp({ path }) {
  return render((
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>
  ));
}

describe('App', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      regions: [{ id: 1, name: '서울' }],
      categories: [],
      restaurants: [],
    }));
  });

  describe('경로가', () => {
    context('/', () => {
      it('HomePage를 그려준다.', () => {
        const { container } = renderApp({ path: '/' });

        expect(container).toHaveTextContent('헤더');

        expect(container).toHaveTextContent('About');
        expect(container).toHaveTextContent('Restaurants');
      });
    });

    context('/about', () => {
      it('About을 그려준다.', () => {
        const { container } = renderApp({ path: '/about' });

        expect(container).toHaveTextContent('헤더');

        expect(container).toHaveTextContent('About this..');
      });
    });

    context('/restaurants', () => {
      it('Restaurants 그려준다.', () => {
        const { container } = renderApp({ path: '/restaurants' });

        expect(container).toHaveTextContent('헤더');

        expect(container).toHaveTextContent('서울');
      });
    });

    context('/restaurants:id', () => {
      it('RestaurantDetail을 그려준다.', () => {
        const { container } = renderApp({ path: '/restaurants/1' });

        expect(container).toHaveTextContent('헤더');

        expect(container).toHaveTextContent('레스토랑 1');
      });
    });

    context('존재하지 않는 페이지인 경우', () => {
      it('NotFoundPage 그려준다.', () => {
        const { container } = renderApp({ path: '/wrong-path' });

        expect(container).toHaveTextContent('해당 페이지가 존재하지 않습니다.');
      });
    });
  });
});
