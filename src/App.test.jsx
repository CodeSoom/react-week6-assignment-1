import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import REGIONS from '../fixtures/regions';
import CATEGORIES from '../fixtures/categories';
import RESTAURANTS from '../fixtures/restaurants';

import App from './App';

function renderApp(path) {
  return render(
    <MemoryRouter initialEntries={path}>
      <App />
    </MemoryRouter>,
  );
}

describe('App', () => {
  beforeEach(() => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      regions: REGIONS,
      categories: CATEGORIES,
      restaurants: RESTAURANTS,
    }));
  });

  context('with path "/"', () => {
    it('renders Home Page', () => {
      const { getByText } = renderApp(['/']);

      expect(getByText('Home')).not.toBeNull();
      expect(getByText('About')).not.toBeNull();
      expect(getByText('Restaurants')).not.toBeNull();
    });
  });
  context('with path "/about"', () => {
    it('renders About Page', () => {
      const { getByText } = renderApp(['/about']);

      expect(getByText('About')).not.toBeNull();
    });
  });
  context('with path "/restaurant"', () => {
    it('renders Restaurant Page', () => {
      const { getByText } = renderApp(['/restaurants']);

      expect(getByText(/서울/)).not.toBeNull();
      expect(getByText(/한식/)).not.toBeNull();
    });
  });
  context('with path "restaurant/{id}', () => {
    it('renders details of restaurant no {id}', () => {
      const { getByText } = renderApp(['/restaurants/1']);

      expect(getByText('서울시 강남구 역삼동')).not.toBeNull();
      expect(getByText('김밥제국')).not.toBeNull();
      expect(getByText('떡볶이')).not.toBeNull();
      expect(getByText('라면')).not.toBeNull();
    });
  });
});
