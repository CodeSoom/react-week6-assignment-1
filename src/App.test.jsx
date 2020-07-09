import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import App from './App';

describe('App', () => {
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
      { id: 1, name: '달빛술담' },
    ],
    restaurant: {
      id: 1,
      name: '양천주가',
      address: '서울 강남구 역삼동',
      menuItems: [
        { id: 1, name: '탕수육' },
      ],
    },
  }));

  function renderApp({ path }) {
    return render(
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>,
    );
  }

  it('renders header all the time', () => {
    const routes = [
      '/',
      '/about',
      '/restaurants',
      '/restaurants/1',
    ];
    const containers = routes.map((route) => {
      const { container } = renderApp({ path: route });
      return container;
    });
    containers.map((container) => expect(container).toHaveTextContent('헤더'));
  });

  context('with path /', () => {
    it('renders the home page', () => {
      const { container } = renderApp({ path: '/' });

      expect(container).toHaveTextContent('Home');
    });
  });

  context('with path /about', () => {
    it('renders the about page', () => {
      const { container } = renderApp({ path: '/about' });

      expect(container).toHaveTextContent('About');
    });
  });

  context('with path /restaurants', () => {
    it('renders the restaurants page', () => {
      const { container } = renderApp({ path: '/restaurants' });

      expect(container).toHaveTextContent('서울');
      expect(container).toHaveTextContent('한식');
      expect(container).toHaveTextContent('달빛술담');
    });
  });

  context('with path /restaurants/:id', () => {
    it('renders the restaurant page', () => {
      const { container } = renderApp({ path: '/restaurants/1' });

      expect(container).toHaveTextContent('양천주가');
      expect(container).toHaveTextContent('서울 강남구 역삼동');
      expect(container).toHaveTextContent('탕수육');
    });
  });

  context('without matched pathname', () => {
    it('renders the not found page', () => {
      const { container } = renderApp({ path: '/nosuchpage' });

      expect(container).toHaveTextContent('404 Not Found');
    });
  });
});
