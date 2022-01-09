import React from 'react';

import { render } from '@testing-library/react';

import given from 'given2';

import { MemoryRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import REGIONS from '../fixtures/regions';
import CATEGORIES from '../fixtures/categories';
import RESTAURANTS from '../fixtures/restaurants';
import RESTAURANT from '../fixtures/restaurant';

import App from './App';

describe('App', () => {
  const dispatch = jest.fn();

  const renderComponent = () => render((
    <MemoryRouter initialEntries={[given.path]}>
      <App />
    </MemoryRouter>
  ));

  beforeEach(() => {
    jest.clearAllMocks();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      regions: REGIONS,
      categories: CATEGORIES,
      restaurants: RESTAURANTS,
      restaurant: RESTAURANT,
    }));
  });

  context('with path /', () => {
    given('path', () => '/');

    it('renders the home page', () => {
      const { container } = renderComponent();

      expect(container).toHaveTextContent('Home');
      expect(container).toHaveTextContent('About');
      expect(container).toHaveTextContent('Restaurants');
    });
  });

  context('with path /about', () => {
    given('path', () => '/about');

    it('renders the about page', () => {
      const { container } = renderComponent();

      expect(container).toHaveTextContent('About');
      expect(container).toHaveTextContent('About 페이지 입니다.');
    });
  });

  context('with path /restaurants', () => {
    given('path', () => '/restaurants');

    it('renders the restaurants page', () => {
      const { container } = renderComponent();

      expect(container).toHaveTextContent(REGIONS[0].name);
      expect(container).toHaveTextContent(CATEGORIES[0].name);
      expect(container).toHaveTextContent(RESTAURANTS[0].name);
    });
  });

  context('with path /restaurants/1', () => {
    given('path', () => '/restaurants/1');

    it('renders the restaurant page', () => {
      const { container } = renderComponent();

      expect(container).toHaveTextContent(RESTAURANT.name);
    });
  });

  context('with invalid path', () => {
    given('path', () => '/invalid/path');

    it('renders the not found page', () => {
      const { container } = renderComponent();

      expect(container).toHaveTextContent('404 Not Found');
    });
  });
});
