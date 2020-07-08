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

  context('with path /about', () => {
    it('AboutPage가 렌더된다.', () => {
      const { container } = renderApp({ path: '/about' });

      expect(container).toHaveTextContent('About');
    });
  });
});
