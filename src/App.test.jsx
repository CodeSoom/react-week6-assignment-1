import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import regions from '../fixtures/regions';
import categories from '../fixtures/categories';
import restaurants from '../fixtures/restaurants';

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
      regions,
      categories,
      restaurants,
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
      const firstRestaurants = restaurants[0];
      const { container } = renderApp(['/restaurants/1']);

      expect(container).toHaveTextContent(firstRestaurants.name);
      expect(container).toHaveTextContent(firstRestaurants.address);
      expect(container).toHaveTextContent(firstRestaurants.menuItems[0].name);
      expect(container).toHaveTextContent(firstRestaurants.menuItems[1].name);
    });
  });
});
