import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import regions from '../fixtures/regions';
import categories from '../fixtures/categories';
import restaurants from '../fixtures/restaurants';

import App from './App';
import { initialRestaurant } from './initialObject';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions,
    categories,
    restaurants,
    restaurant: initialRestaurant,
  }));

  beforeEach(() => {
    dispatch.mockClear();
  });

  function renderApp({ path }) {
    return render((
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    ));
  }

  it('show home', () => {
    const { container } = renderApp({ path: '' });

    expect(container).toHaveTextContent('Home');
    expect(container).toHaveTextContent('About');
    expect(container).toHaveTextContent('Restaurants');
    expect(container).toHaveTextContent('헤더');
  });

  describe('click 헤더', () => {
    it('go to home page', () => {
      const { getByText, container } = renderApp({ path: '/about' });

      fireEvent.click(getByText('헤더'));

      expect(container).toHaveTextContent('Home');
    });
  });

  describe('/about', () => {
    it('go to the About page', () => {
      const { container } = renderApp({ path: '/about' });

      expect(container).toHaveTextContent('About 페이지 입니다.');
    });
  });

  describe('/restaurants', () => {
    it('go to the Restaurants page', () => {
      const { getByText } = renderApp({ path: '/restaurants' });

      expect(getByText('서울')).toBeInTheDocument();
    });
  });

  describe('/any_not_exist_url', () => {
    it('go to the 404 not found page', () => {
      const { container } = renderApp({ path: '/any_not_exist_url' });

      expect(container).toHaveTextContent('404 Not Found');
    });
  });

  describe('/restaurants/id', () => {
    it('go to the restaurant detail page', () => {
      const { container } = renderApp({ path: '/restaurants/1' });

      expect(container).toHaveTextContent('메뉴');
    });
  });
});
