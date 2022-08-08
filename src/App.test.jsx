import React from 'react';
import {
  MemoryRouter,
} from 'react-router-dom';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

const customRender = (path) => render((
  <MemoryRouter initialEntries={[path]}>
    <App />
  </MemoryRouter>
));

describe('App', () => {
  beforeEach(() => {
    jest.clearAllMocks();

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
        { id: 1, name: '한국식 초밥' },
      ],
      selectedRestaurant: { id: 1, name: '한국식 초밥' },
      restaurant: {
        id: 6,
        categoryId: 1,
        name: '한국식 초밥',
        address: '서울 강남구',
        menuItems: [
          {
            id: 18,
            restaurantId: 6,
            name: '밥',
          },
        ],
      },
    }));
  });

  context('with path /', () => {
    it('shows header', () => {
      const { queryByText } = customRender('/');

      expect(queryByText('헤더')).not.toBeNull();
    });

    it('shows HOME heading', () => {
      const { queryByText } = customRender('/');

      expect(queryByText('Home')).not.toBeNull();
    });

    it('does not show about page description', () => {
      const { queryByText } = customRender('/');

      expect(queryByText('About 페이지입니다')).toBeNull();
    });
  });

  context('with path /about', () => {
    it('shows about page description', () => {
      const { queryByText } = customRender('/about');

      expect(queryByText('About 페이지입니다.')).not.toBeNull();
    });

    it('does not show Home heading', () => {
      const { queryByText } = customRender('/about');

      expect(queryByText('Home')).toBeNull();
    });
  });

  context('with path /restaurants', () => {
    it('shows regions', () => {
      const { queryByText } = customRender('/restaurants');

      expect(queryByText('서울')).not.toBeNull();
    });

    it('shows categories', () => {
      const { queryByText } = customRender('/restaurants');

      expect(queryByText('한식')).not.toBeNull();
    });
  });

  context('with path /restaurant', () => {
    it('shows a restaurant', () => {
      const { queryByText } = customRender('/restaurants/1');

      expect(queryByText('한국식 초밥')).not.toBeNull();
    });
  });
});
