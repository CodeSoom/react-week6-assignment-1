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
      regions: [
        { id: 1, name: '서울' },
      ],
      categories: [],
      restaurants: [],
    }));
  });

  function rederApp({ path }) {
    return render((
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    ));
  }

  context('with path /', () => {
    it('renders the home page', () => {
      const { container } = rederApp({ path: '/' });

      expect(container).toHaveTextContent('Home');
    });
  });

  context('with path /about', () => {
    it('renders the about page', () => {
      const { container } = rederApp({ path: '/about' });

      expect(container).toHaveTextContent('서비스에 대해서');
    });
  });

  context('with path /restaurants', () => {
    it('renders the restaurants page', () => {
      const { container } = rederApp({ path: '/restaurants' });

      expect(container).toHaveTextContent('서울');
    });
  });

  context('with undefined path', () => {
    it('renders the not found page', () => {
      const { container } = rederApp({ path: '/undefined' });

      expect(container).toHaveTextContent('404 - Not Found');
    });
  });
});
