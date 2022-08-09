import React from 'react';
import {
  MemoryRouter,
} from 'react-router-dom';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

import regions from '../fixtures/regions';
import categories from '../fixtures/categories';
import restaurants from '../fixtures/restaurants';
import restaurant from '../fixtures/restaurant';

const customRender = (path) => render((
  <MemoryRouter initialEntries={[path]}>
    <App />
  </MemoryRouter>
));

jest.mock('react-redux');

useSelector.mockImplementation((selector) => selector({
  regions,
  categories,
  restaurants,
  restaurant,
}));

const dispatch = jest.fn();
useDispatch.mockImplementation(() => dispatch);

describe('App', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  context('with path /', () => {
    it('shows header', () => {
      const { queryByText } = customRender('/');

      expect(queryByText('헤더')).not.toBeNull();
    });

    it('shows "HOME" heading', () => {
      const { queryByText } = customRender('/');

      expect(queryByText('Home')).not.toBeNull();
    });

    it('does not show other page\'s description', () => {
      const { queryByText } = customRender('/');

      expect(queryByText('About 페이지입니다')).toBeNull();
    });
  });

  context('with path /about', () => {
    it('shows description', () => {
      const { queryByText } = customRender('/about');

      expect(queryByText('About 페이지입니다.')).not.toBeNull();
    });

    it('does not show "Home" heading', () => {
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
