import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';
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
        { id: 1, name: '양천주가' },
      ],
      restaurantDetail: {
        id: 1,
        name: '양천주가',
        address: '서울 강남구 123456',
        menuItems: [
          { id: 1, name: '비빔밥' },
        ],
      },
    }));
  });

  it('renders header', () => {
    const { queryByText } = render((
      <MemoryRouter>
        <App />
      </MemoryRouter>
    ));

    expect(queryByText('헤더')).not.toBeNull();
  });

  context('with path /', () => {
    it('renders home page', () => {
      const { queryByText } = render((
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      ));

      expect(queryByText('Home')).not.toBeNull();
    });
  });

  context('with path /about', () => {
    it('renders about page', () => {
      const { queryByText } = render((
        <MemoryRouter initialEntries={['/about']}>
          <App />
        </MemoryRouter>
      ));

      expect(queryByText('About')).not.toBeNull();
    });
  });

  context('with path /restaurants', () => {
    it('renders restaurants page', () => {
      const { queryByText } = render((
        <MemoryRouter initialEntries={['/restaurants']}>
          <App />
        </MemoryRouter>
      ));

      expect(queryByText('서울')).not.toBeNull();
      expect(queryByText('한식')).not.toBeNull();
      expect(queryByText('양천주가')).not.toBeNull();
    });
  });

  context('with path /restaurants/1', () => {
    it('renders restaurants detail page', () => {
      const { queryByText } = render((
        <MemoryRouter initialEntries={['/restaurants/1']}>
          <App />
        </MemoryRouter>
      ));

      expect(queryByText('양천주가')).not.toBeNull();
      expect(queryByText('서울 강남구 123456')).not.toBeNull();
      expect(queryByText('메뉴')).not.toBeNull();
      expect(queryByText('비빔밥')).not.toBeNull();
    });
  });

  context('with invalid path', () => {
    it('renders not found page', () => {
      const { queryByText } = render((
        <MemoryRouter initialEntries={['/xxx']}>
          <App />
        </MemoryRouter>
      ));

      expect(queryByText('404 Not Found')).not.toBeNull();
    });
  });
});
