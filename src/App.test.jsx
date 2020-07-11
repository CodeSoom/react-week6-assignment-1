import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import App from './App';

describe('App', () => {
  beforeEach(() => {
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
        { id: 1, name: '마법사주방' },
      ],
    }));
  });

  function renderApp({ path }) {
    return render(
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>,
    );
  }

  context('with path /', () => {
    it('renders HomePage', () => {
      const { getByText } = renderApp({ path: '/' });

      expect(getByText(/About/)).not.toBeNull();
      expect(getByText(/Restaurants/)).not.toBeNull();
    });
  });

  context('with path /restaurants', () => {
    it('renders RestaurantsPage', () => {
      const { queryByText } = renderApp({ path: '/restaurants' });

      expect(queryByText('서울')).not.toBeNull();
      expect(queryByText('한식')).not.toBeNull();
    });
  });

  context('with path /about', () => {
    it('renders RestaurantsPage', () => {
      const { getByText } = renderApp({ path: '/about' });

      expect(getByText(/About이지롱/)).not.toBeNull();
    });
  });

  context('with invalid path', () => {
    it('renders NotFoundPage', () => {
      const { getByText } = renderApp({ path: '/invalidpath' });

      expect(getByText(/404 Not Found/)).not.toBeNull();
    });
  });
});
