import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

describe('App', () => {
  const dispatch = jest.fn();

  function renderComponent({ path }) {
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
      regions: [],
      categories: [],
      restaurants: [],
      restaurant: {
        name: '레스토랑 이름',
        address: '레스토랑 주소',
        menuItems: [
          { id: 1, name: '메뉴 이름' },
        ],
      },
    }));
  });

  describe('with any page', () => {
    it('have Header', () => {
      const { queryByText } = renderComponent({ path: '/' });
      expect(queryByText('헤더')).not.toBeNull();
    });
  });

  describe('with path /', () => {
    it('return Home Page', () => {
      renderComponent({ path: '/' });
    });
  });

  describe('with path /about', () => {
    it('return About Page', () => {
      renderComponent({ path: '/about' });
    });
  });

  describe('with path /restaurants', () => {
    it('return Restaurant List Page', () => {
      renderComponent({ path: '/restaurants' });
    });
  });

  describe('with path /restaurant/1', () => {
    it('return Restaurant View Page', () => {
      renderComponent({ path: '/restaurants/1' });
    });
  });
});
