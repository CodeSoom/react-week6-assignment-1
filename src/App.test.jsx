import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

import restaurantDetail from '../fixtures/restaurantDetail';

describe('App', () => {
  const dispatch = jest.fn();

  function renderApp(path) {
    return render((
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    ));
  }

  beforeEach(() => {
    dispatch.mockClear();
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
      restaurantDetail,
    }));
  });

  context('with path /', () => {
    it('renders HomePage', () => {
      const { getByRole } = renderApp('/');

      expect(dispatch).not.toBeCalled();
      expect(getByRole('heading', { name: 'Home' })).toBeInTheDocument();
      expect(getByRole('link', { name: 'About' })).toHaveAttribute('href', '/about');
      expect(getByRole('link', { name: 'Restaurants' })).toHaveAttribute('href', '/restaurants');
    });
  });

  context('with path /about', () => {
    it('renders About', () => {
      const { getByRole, getByText } = renderApp('/about');

      expect(dispatch).not.toBeCalled();
      expect(getByRole('heading', { name: 'About' })).toBeInTheDocument();
      expect(getByText('About 페이지 입니다')).toBeInTheDocument();
    });
  });

  context('with path /restaurants', () => {
    it('renders restaurants page', () => {
      const { queryByText, getByRole } = renderApp('/restaurants');

      expect(dispatch).toBeCalled();
      expect(getByRole('link', { name: '헤더' })).toHaveAttribute('href', '/');

      expect(queryByText('서울')).not.toBeNull();
      expect(queryByText('한식')).not.toBeNull();
      expect(queryByText('마법사주방')).not.toBeNull();
    });
  });

  context('with path /restaurants/:id', () => {
    const {
      name, address, menuItems, reviews, information,
    } = restaurantDetail;

    it('renders restaurant detail page', () => {
      const {
        getByRole, getByText, getAllByRole,
      } = renderApp('/restaurants/4');

      expect(dispatch).toBeCalled();

      expect(getByRole('heading', { name })).toBeInTheDocument();
      expect(getByText(`주소 : ${address}`)).toBeInTheDocument();
      expect(getByText(`정보 : ${information}`)).toBeInTheDocument();

      expect(getByRole('heading', { name: '메뉴' })).toBeInTheDocument();
      menuItems.forEach((menuItem) => {
        expect(getAllByRole('list')[0]).toHaveTextContent(menuItem.name);
      });

      expect(getByRole('heading', { name: '리뷰' })).toBeInTheDocument();
      reviews.forEach((review) => {
        expect(getAllByRole('list')[1]).toHaveTextContent(review.name);
      });
    });
  });

  context('with path /any_not_exist_url', () => {
    it('renders NotFound', () => {
      const { getByRole } = renderApp('/any_not_exist_url');

      expect(dispatch).not.toBeCalled();
      expect(getByRole('heading', { name: '404 Not Found' })).toBeInTheDocument();
    });
  });
});
