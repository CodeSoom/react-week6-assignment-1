import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  function renderApp(initialEntry) {
    const { container } = render((
      <MemoryRouter initialEntries={[initialEntry]}>
        <App />
      </MemoryRouter>
    ));

    return container;
  }
  beforeEach(() => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      regions: [
        {
          id: '1',
          name: '서울',
        },
      ],
      categories: [],
      restaurants: [],
    }));
  });

  context('with path /', () => {
    it('renders the home page', () => {
      const container = renderApp('/');

      expect(container).toHaveTextContent('Home');
    });
  });

  context('with path /about', () => {
    it('renders the about page', () => {
      const container = renderApp('/about');

      expect(container).toHaveTextContent('About 페이지 입니다.');
    });
  });

  context('with path /restaurants', () => {
    it('renders the restaurants page', () => {
      const container = renderApp('/restaurants');

      expect(container).toHaveTextContent('서울');
    });
  });

  context('with invalid path', () => {
    it('renders the not found page', () => {
      const container = renderApp('/xxx');

      expect(container).toHaveTextContent('404 Not Found');
    });
  });
});
