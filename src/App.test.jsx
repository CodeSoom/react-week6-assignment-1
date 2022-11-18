import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import App from './App';

import restaurants from '../fixtures/restaurants';
import categories from '../fixtures/categories';
import regions from '../fixtures/regions';

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

  const renderApp = ({ path }) => render((
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>
  ));

  context('올바른 경로를 가지고 있을 때', () => {
    it('"/"일 때, 홈페이지를 랜더링한다', () => {
      const { container } = renderApp({ path: '/' });

      expect(container).toHaveTextContent('Home');
    });

    it('"/about"일 때, about 페이지를 랜더링한다', () => {
      const { container } = renderApp({ path: '/about' });

      expect(container).toHaveTextContent('About 페이지입니다');
    });

    it('"/restaurants"일 때, 레스토랑 페이지를 랜더링한다', () => {
      const { container } = renderApp({ path: '/restaurants' });

      expect(container).toHaveTextContent('김밥제국');
    });
  });

  context('잘못된 경로를 가지고 있을 때', () => {
    it('NotFoundPage로 연결된다', () => {
      const { container } = renderApp({ path: '/xxx' });

      expect(container).toHaveTextContent('404 Not Found');
    });
  });
});
