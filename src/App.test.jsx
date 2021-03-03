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

  context('경로가 /', () => {
    it('HomePage를 그려준다.', () => {
      const { container } = renderApp({ path: '/' });

      expect(container).toHaveTextContent('헤더');

      expect(container).toHaveTextContent('About');
      expect(container).toHaveTextContent('Restaurants');
    });
  });

  context('경로가 /about', () => {
    it('About을 그려준다.', () => {
      const { container } = renderApp({ path: '/about' });

      expect(container).toHaveTextContent('헤더');

      expect(container).toHaveTextContent('About this..');
    });
  });

  context('경로가 /restaurants', () => {
    it('Restaurants 그려준다.', () => {
      const { container } = renderApp({ path: '/restaurants' });

      expect(container).toHaveTextContent('헤더');

      expect(container).toHaveTextContent('서울');
    });
  });
});
