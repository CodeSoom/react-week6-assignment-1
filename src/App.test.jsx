import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

import regions from '../fixtures/regions';
import categories from '../fixtures/categories';
import restaurants from '../fixtures/restaurants';

describe('App', () => {
  beforeEach(() => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      regions,
      categories,
      restaurants,
      restaurantInfo: {
        menuItems: [],
      },
    }));
  });

  function renderApp({ path }) {
    return render((
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    ));
  }

  context('with path /', () => {
    it('renders header', () => {
      const { container } = renderApp({ path: '/' });

      expect(container).toHaveTextContent('헤더');
    });

    it('renders home page', () => {
      const { container } = renderApp({ path: '/' });

      expect(container).toHaveTextContent('Home');
    });

    it('goes to home page when header is clicked', () => {
      const { container, getByText } = renderApp({ path: '/' });

      fireEvent.click(getByText('헤더'));

      expect(container).toHaveTextContent('Home');
    });

    it('goes to about page when "about" is clicked', () => {
      const { container, getByText } = renderApp({ path: '/' });

      fireEvent.click(getByText('About'));

      expect(container).toHaveTextContent('About');
    });

    it('goes to restaurants page when "restaurants" is clicked', () => {
      const { container, getByText } = renderApp({ path: '/' });

      fireEvent.click(getByText('Restaurants'));

      expect(container).toHaveTextContent('Restaurants');
    });
  });

  context('with path /restaurants', () => {
    it('goes to restaurant detail page when specific restaurant is clicked', () => {
      const { container, getByText } = renderApp({ path: '/restaurants' });

      fireEvent.click(getByText('김밥제국'));

      expect(container).toHaveTextContent('Restaurant Information');
    });
  });
});
