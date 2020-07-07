import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import App from './App';

function renderApp({ path }) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  );
}

describe('App with router', () => {
  context('with URL included /HomePage', () => {
    it('shows page name', () => {
      const { container } = renderApp({ path: '/' });

      expect(container).toHaveTextContent('Home');
    });
  });

  context('with URL included /AboutPage', () => {
    it('shows page name', () => {
      const { container } = renderApp({ path: '/about' });

      expect(container).toHaveTextContent('About');
    });
  });

  context('with URL included /RestaurantsPage', () => {
    it('shows page name', () => {
      useSelector.mockImplementation((selector) => selector({
        regions: [],
        categories: [],
        restaurants: [],
      }));
      const dispatch = jest.fn();

      useDispatch.mockImplementation(() => dispatch);

      const { container } = renderApp({ path: '/restaurants' });

      expect(container).toHaveTextContent('Restaurants');
    });
  });

  context('with URL included /RestaurantPage', () => {
    it('shows page name', () => {
      const { container } = renderApp({ path: '/restaurant/1' });

      expect(container).toHaveTextContent('Restaurant1');
    });
  });

  context('with URL included /nonExistentPage', () => {
    it('shows Not Found', () => {
      const { container } = renderApp({ path: '/non-existent' });

      expect(container).toHaveTextContent('404 Not Found');
    });
  });
});
