import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';
import { MemoryRouter } from 'react-router-dom';

describe('App', () => {
  beforeEach(() => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) =>
      selector({
        regions: [{ id: 1, name: '서울' }],
        categories: [{ id: 1, name: '한식' }],
        restaurants: [{ id: 1, name: '마법사주방' }],
      })
    );
  });

  const renderApp = ({ path }) =>
    render(
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    );

  context('path Home', () => {
    it('Home', () => {
      const { container } = renderApp({ path: '/' });

      expect(container).toHaveTextContent('About');
    });
  });

  context('path About', () => {
    it('Home', () => {
      const { container } = renderApp({ path: '/about' });

      expect(container).toHaveTextContent('About');
    });
  });

  context('path Restaurants', () => {
    it('Home', () => {
      const { container } = renderApp({ path: '/restaurants' });

      expect(container).toHaveTextContent('서울');
    });
  });

  context('invalid path', () => {
    it('renders th not found page', () => {
      const { container } = renderApp({ path: '/xxx' });

      expect(container).toHaveTextContent('404');
    });
  });
});
