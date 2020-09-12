import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import restaurant from '../fixtures/restaurant';

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
      restaurant,
    }));
  });

  function renderApp({ path }) {
    return render((
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    ));
  }

  describe('click header', () => {
    it('renders the home page', () => {
      const { getByText } = renderApp({ path: '/restaurants' });

      fireEvent.click(getByText('헤더'));
      expect(getByText('Home')).not.toBeNull();
    });
  });

  context('with all path', () => {
    it('renders the header element', () => {
      const { getByText } = renderApp({ path: '/' });

      expect(getByText('헤더')).not.toBeNull();
    });
  });

  context('with path /', () => {
    it('renders the home page', () => {
      const { container } = renderApp({ path: '/' });

      expect(container).toHaveTextContent('Home');
      expect(container).toHaveTextContent('About');
      expect(container).toHaveTextContent('Restaurants');
    });
  });

  context('with path /about', () => {
    it('renders the about page', () => {
      const { container } = renderApp({ path: '/about' });

      expect(container).toHaveTextContent('페이지입니다.');
    });
  });

  context('with path /restaurants', () => {
    it('renders the restaurants page', () => {
      const { container } = renderApp({ path: '/restaurants' });

      expect(container).toHaveTextContent('서울');
    });
  });

  context('with path /restaurant/1', () => {
    it('renders the restaurant detail page', () => {
      const { container } = renderApp({ path: '/restaurants/1' });

      expect(container).toHaveTextContent('양천주가');
    });
  });
});
