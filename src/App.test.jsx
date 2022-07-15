import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import {
  CATEGORIES,
  REGIONS,
  RESTAURANT,
  RESTAURANTS,
} from '@fixtures';

import App from './App';

describe('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions: REGIONS,
    categories: CATEGORIES,
    restaurants: RESTAURANTS,
    restaurant: RESTAURANT,
  }));

  const renderApp = ({ path = '/' } = {}) => render((
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>
  ));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the header', () => {
    const { container } = renderApp();

    expect(container).toHaveTextContent('헤더');
  });

  context('with path /', () => {
    it('renders the home page', () => {
      const { container } = renderApp({ path: '/' });

      expect(container).toHaveTextContent('Home');
    });
  });

  context('with path /about', () => {
    it('renders the about page', () => {
      const { container } = renderApp({ path: '/about' });

      expect(container).toHaveTextContent('About 페이지');
    });
  });

  context('with path /restaurants', () => {
    it('renders the restaurants page', () => {
      const { container } = renderApp({ path: '/restaurants' });

      expect(container).toHaveTextContent(REGIONS[0].name);
      expect(container).toHaveTextContent(CATEGORIES[0].name);
    });
  });

  context('with path /restaurants/:restaurantId', () => {
    it('renders the restaurant page', () => {
      const { container } = renderApp({ path: '/restaurants/1' });

      expect(container).toHaveTextContent(RESTAURANT.name);
    });
  });

  context('with invalid paths', () => {
    it('renders the not found page', () => {
      const { container } = renderApp({ path: '/xxx' });

      expect(container).toHaveTextContent('Not Found');
    });
  });
});
