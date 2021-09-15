import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { dispatch } from '../__mocks__/react-redux';

import App from './App';

describe('App', () => {
  beforeEach(() => {
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
    }));
  });

  function renderApp({ path }) {
    return render((
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    ));
  }

  context('"/" path 에서는', () => {
    it('HOME이 보여야 한다.', () => {
      const { container } = renderApp({ path: '/' });

      expect(container).toHaveTextContent('HOME');
    });
  });

  context('"/about" path 에서는', () => {
    it('Abount이 보여야 한다.', () => {
      const { container } = renderApp({ path: '/about' });

      expect(container).toHaveTextContent('About');
    });
  });

  context('"/restaurants" path 에서는', () => {
    it('Restaurants가 보여야 한다.', () => {
      const { container } = renderApp({ path: '/restaurants' });

      expect(container).toHaveTextContent('Restaurants');
    });

    it('지역들이 보여야 한다.', () => {
      const { container } = renderApp({ path: '/restaurants' });

      expect(container).toHaveTextContent('서울');
    });
  });

  context('잘못된 path 에서는', () => {
    it('Not found가 보여야 한다.', () => {
      const { container } = renderApp({ path: '/xxx' });

      expect(container).toHaveTextContent('Not found');
    });
  });
});
