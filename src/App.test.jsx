import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

describe('App', () => {
  const dispatch = jest.fn();

  function renderApp(path) {
    return render((
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    ));
  }
  beforeEach(() => {
    dispatch.mockClear();
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
  context('with path /', () => {
    it('renders HomePage', () => {
      const { getByRole } = renderApp('/');

      expect(dispatch).not.toBeCalled();
      expect(getByRole('heading', { name: 'Home' })).toBeInTheDocument();
      expect(getByRole('link', { name: 'About' })).toHaveAttribute('href', '/about');
      expect(getByRole('link', { name: 'Restaurants' })).toHaveAttribute('href', '/restaurants');
    });
  });
  context('with path /restaurants', () => {
    it('renders restaurants page', () => {
      const { queryByText, getByRole } = renderApp('/restaurants');

      expect(dispatch).toBeCalled();
      expect(getByRole('link')).toHaveAttribute('href', '/');
      expect(getByRole('heading', { name: '헤더' })).toBeInTheDocument();

      expect(queryByText('서울')).not.toBeNull();
      expect(queryByText('한식')).not.toBeNull();
      expect(queryByText('마법사주방')).not.toBeNull();
    });
  });
});
