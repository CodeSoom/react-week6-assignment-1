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
      categories: [],
      restaurants: [],
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
    it('render Homepage', () => {
      const { container } = renderApp({ path: '/' });

      expect(container).toHaveTextContent('Home');
    });
  });

  context('with path /about', () => {
    it('render About', () => {
      const { container } = renderApp({ path: '/about' });

      expect(container).toHaveTextContent('서비스에 대해서');
    });
  });

  context('with path /restaurant', () => {
    it('render Restaurant', () => {
      const { container } = renderApp({ path: '/restaurant' });

      expect(container).toHaveTextContent('서울');
    });
  });

  context('with invalie path ', () => {
    it('render the not found page', () => {
      const { container } = renderApp({ path: '/xxxx' });

      expect(container).toHaveTextContent('404');
    });
  });
});
