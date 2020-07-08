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

  describe('with path /', () => {
    it('return Home Page', () => {
      const { queryByText } = renderComponent({ path: '/' });
      expect(queryByText('헤더')).not.toBeNull();
    });
  });

  describe('with path /about', () => {
    it('return About Page', () => {
      const { queryByText } = renderComponent({ path: '/about' });
      expect(queryByText('헤더')).not.toBeNull();
    });
  });

  describe('with path /restaurants', () => {
    it('return Restaurant List Page', () => {
      const { queryByText } = renderComponent({ path: '/restaurants' });
      expect(queryByText('헤더')).not.toBeNull();
    });
  });

  describe('with path /restaurant/1', () => {
    it('return Restaurant View Page', () => {
      const { queryByText } = renderComponent({ path: '/restaurants/1' });
      expect(queryByText('헤더')).not.toBeNull();
    });
  });
});
