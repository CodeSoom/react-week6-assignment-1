import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import {
  MemoryRouter,
} from 'react-router-dom';

import App from './App';

describe('App', () => {
  const dispatch = jest.fn();

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
        { id: 1, categoryId: 1, name: '양천주가' },
      ],
    }));
  });

  context('with path /', () => {
    it('renders HomePage', () => {
      const { container } = render((
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      ));

      expect(container).toHaveTextContent('Home');
    });
  });

  context('with path /about', () => {
    it('renders AboutPage', () => {
      const { container } = render((
        <MemoryRouter initialEntries={['/about']}>
          <App />
        </MemoryRouter>
      ));

      expect(container).toHaveTextContent('About');
    });
  });

  context('with path /restaurants', () => {
    it('renders RestaurantsPage', () => {
      const { container } = render((
        <MemoryRouter initialEntries={['/restaurants']}>
          <App />
        </MemoryRouter>
      ));

      expect(container).toHaveTextContent('서울');
      expect(container).toHaveTextContent('한식');
      expect(container).toHaveTextContent('양천주가');
    });
  });

  context('with path /restaurants/:id', () => {
    it('renders RestaurantDetailPage', () => {
      const { container } = render((
        <MemoryRouter initialEntries={['/restaurants/1']}>
          <App />
        </MemoryRouter>
      ));

      expect(container).toHaveTextContent('주소');
      expect(container).toHaveTextContent('메뉴');
    });
  });

  context('with invalid path', () => {
    it('renders NotFoundPage', () => {
      const { container } = render((
        <MemoryRouter initialEntries={['/xxx']}>
          <App />
        </MemoryRouter>
      ));

      expect(container).toHaveTextContent('Not Found');
    });
  });
});
