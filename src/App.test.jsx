import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import App from './App';

describe('App', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      regions: [
        { id: 1, name: '서울' },
      ],
      categories: [],
      restaurants: [],
    }));
  });

  function renderApp({ path }) {
    return render((
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    ));
  }

  context('경로가 / 일떄', () => {
    it('HomePage가 렌더된다.', () => {
      const { container } = renderApp({ path: '/' });

      expect(container).toHaveTextContent('Home');
      expect(container).toHaveTextContent('헤더');
    });
  });

  context('경로가 /about 일떄', () => {
    it('AboutPage가 렌더된다.', () => {
      const { container } = renderApp({ path: '/about' });

      expect(container).toHaveTextContent('이 홈페이지에 대하여');
    });
  });

  context('경로가 /restaurants 일떄', () => {
    it('RestaurantsPage가 렌더된다.', () => {
      const { container } = renderApp({ path: '/restaurants' });

      expect(container).toHaveTextContent('서울');
    });
  });

  context('경로가 잘못됐을 때', () => {
    it('NotFoundPage가 렌더된다.', () => {
      const { container } = renderApp({ path: '/xxx' });

      expect(container).toHaveTextContent('404 Not Found');
    });
  });
});
