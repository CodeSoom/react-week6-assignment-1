import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import App from './App';

describe('App', () => {
  function renderApp({ path }) {
    return render((
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    ));
  }

  beforeEach(() => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      regions: [],
      categories: [],
      restaurants: [],
    }));
  });

  context('경로가 /', () => {
    it('HomePage를 그려준다.', () => {
      const { container } = renderApp({ path: '/' });

      expect(container).toHaveTextContent('헤더');

      expect(container).toHaveTextContent('About');
      expect(container).toHaveTextContent('Restraunts');
    });
  });

  context('경로가 /about', () => {
    it('About을 그려준다.', () => {
      const { container } = renderApp({ path: '/about' });

      expect(container).toHaveTextContent('헤더');

      expect(container).toHaveTextContent('About this..');
    });
  });
});
