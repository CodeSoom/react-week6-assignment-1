import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

describe('App', () => {
  beforeEach(() => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      regions: [{
        id: 1,
        name: '서울',
      }],
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

  context('path가 / 일 때', () => {
    it('HomePage를 렌더링한다.', () => {
      const { container } = renderApp({ path: '/' });

      expect(container).toHaveTextContent('Home');
    });
  });

  context('path가 /about 일 때', () => {
    it('AboutPage를 렌더링한다.', () => {
      const { container } = renderApp({ path: '/about' });

      expect(container).toHaveTextContent('About');
    });
  });

  context('path가 /restaurants 일 때', () => {
    it('RestaurantsPage를 렌더링한다.', () => {
      const { container } = renderApp({ path: '/restaurants' });

      expect(container).toHaveTextContent('서울');
    });
  });

  context('path가 /restaurants/:id 일 때', () => {
    it('RestaurantsInfoPage를 렌더링한다.', () => {
      const { container } = renderApp({ path: '/restaurants/:id' });

      expect(container).toHaveTextContent('주소');
    });
  });

  context('path에 접근 가능하지 않을 때', () => {
    it('NotFoundPage를 렌더링한다.', () => {
      const { container } = renderApp({ path: '/*' });

      expect(container).toHaveTextContent('돌아가');
    });
  });
});
