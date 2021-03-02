import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import App from './App';

function renderApp({ path }) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  );
}

describe('App', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

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
      restaurantsDetail: {
        id: 1,
        name: '마법사 주방',
        address: '서울시 강남구 강남대로 94길 9',
        menuItems: [
          {
            id: 14,
            restaurantsId: 3,
            name: '맛나는거',
          },
          {
            id: 15,
            restaurantsId: 3,
            name: '짠거',
          },
        ],
      },
    }));
  });

  context('pathName이 / 인 경우에', () => {
    it('HomePage를 그린다.', () => {
      const { queryByText } = renderApp({ path: '/' });

      expect(queryByText('헤더').getAttribute('href')).toBe('/');
      expect(queryByText('헤더')).toBeInTheDocument();
      expect(queryByText('Home')).toBeInTheDocument();
    });
  });

  context('pathName이 /About 인 경우에', () => {
    it('AboutPage를 그린다.', () => {
      const { queryByText } = renderApp({ path: '/About' });

      expect(queryByText('헤더')).toBeInTheDocument();
      expect(queryByText('About 페이지 입니다.')).toBeInTheDocument();
    });
  });

  context('pathName이 /Restaurants인 경우에', () => {
    it('RestaurantsPage를 그린다.', () => {
      const { queryByText } = renderApp({ path: '/Restaurants' });

      expect(queryByText('헤더')).toBeInTheDocument();
      expect(queryByText('서울')).toBeInTheDocument();
    });
  });

  context('pathName이 /Restaurants/1인 경우에', () => {
    it('RestaurantsDetailContainer를 그린다.', () => {
      const { queryByText } = renderApp({ path: '/Restaurants/1' });

      expect(queryByText('헤더')).toBeInTheDocument();
      expect(queryByText(/서울시 강남구 강남대로 94길 9/)).toBeInTheDocument();
    });
  });
});
