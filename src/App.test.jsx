import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

describe('App', () => {
  const dispatch = jest.fn();

  function renderApp({ path }) {
    return render((
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    ));
  }

  beforeEach(() => {
    jest.clearAllMocks();

    useSelector.mockImplementation((selector) => selector({
      regions: [
        { id: 1, name: '서울' },
      ],
      categories: [
        { id: 2, name: '한식' },
      ],
      restaurants: [
        { id: 3, name: '마법사주방' },
      ],
      restaurant: {
        id: 3,
        categoryId: 4,
        name: '마법사주방',
        address: '서울 강남구 강남대로94길 9',
        menuItems: [
          {
            id: 14,
            restaurantId: 3,
            name: '맛나는 거',
          },
          {
            id: 15,
            restaurantId: 3,
            name: '짠 거',
          },
        ],
      },
    }));

    useDispatch.mockImplementation(() => dispatch);
  });

  context('with path /', () => {
    it('renders the home page', () => {
      const { container } = render((
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      ));

      expect(container).toHaveTextContent('헤더');
      expect(container).toHaveTextContent('Home');
      expect(container).toHaveTextContent('About');
      expect(container).toHaveTextContent('Restaurants');
    });
  });

  context('with path /about', () => {
    it('renders the about page', () => {
      const { container } = renderApp({ path: '/' });

      expect(container).toHaveTextContent('헤더');
      expect(container).toHaveTextContent('About');
    });
  });

  context('with path /restaurnats', () => {
    it('renders the restaurants page', () => {
      const { container } = renderApp({ path: '/restaurants' });

      expect(container).toHaveTextContent('헤더');
      expect(container).toHaveTextContent('서울');
      expect(container).toHaveTextContent('한식');
      expect(container).toHaveTextContent('마법사주방');
    });
  });

  context('with path /restaurants/:id', () => {
    it('renders the restaurant detail', () => {
      const { container } = renderApp({ path: '/restaurants/3' });

      expect(container).toHaveTextContent('마법사주방');
      expect(container).toHaveTextContent('서울 강남구 강남대로94길 9');
      expect(container).toHaveTextContent('맛나는 거');
      expect(container).toHaveTextContent('짠 거');
    });
  });

  context('with unspecified path such as /kdaskhkajsdh', () => {
    it('renders the NotFound page', () => {
      const { container } = renderApp({ path: '/kdaskhkajsdh' });

      expect(container).toHaveTextContent('헤더');
      expect(container).toHaveTextContent('404 Not Found');
    });
  });
});
