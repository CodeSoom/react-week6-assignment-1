import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import { MemoryRouter } from 'react-router';

import App from './App';

import restaurant from '../fixtures/restaurant';

describe('App', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      regions: [
        { id: 1, name: '서울' },
      ],
      categories: [],
      restaurants: [],
      restaurant: {},
    }));
  });

  function renderApp(pathname) {
    return render((
      <MemoryRouter initialEntries={[pathname]}>
        <App />
      </MemoryRouter>
    ));
  }

  context('with path /', () => {
    it('renders the home page', () => {
      const { getByRole } = renderApp('/');

      expect(getByRole('link', { name: 'About' })).toBeInTheDocument();
      expect(getByRole('link', { name: 'Restaurants' })).toBeInTheDocument();
    });
  });

  context('with path /about', () => {
    it('renders the about page', () => {
      const { getByRole, getByText } = renderApp('/about');

      expect(getByRole('heading', { name: 'About' })).toBeInTheDocument();
      expect(getByText('About 페이지입니다.')).toBeInTheDocument();
    });
  });

  context('with path /restaurants', () => {
    it('renders the restaurants page', () => {
      const { getByRole } = renderApp('/restaurants');

      expect(dispatch).toBeCalled();

      expect(getByRole('button', { name: '서울' })).toBeInTheDocument();
    });
  });

  context('with path /restaurants/:id', () => {
    context('with restaurant', () => {
      beforeEach(() => {
        useSelector.mockImplementation((selector) => selector({
          restaurant: {},
        }));
      });

      it('renders the restaurants page', () => {
        const { getByText } = renderApp('/restaurants/1');

        expect(getByText('Loading...')).toBeInTheDocument();
      });
    });

    context('without restaurant', () => {
      beforeEach(() => {
        useDispatch.mockImplementation(() => dispatch);

        useSelector.mockImplementation((selector) => selector({
          restaurant,
        }));
      });

      it('renders the restaurants page', () => {
        const { getByRole } = renderApp('/restaurants/1');

        expect(getByRole('heading', { name: '메뉴' })).toBeInTheDocument();
      });
    });
  });

  context('with invalid path', () => {
    it('renders the not found page', () => {
      const { getByRole } = renderApp('/xxx');

      expect(getByRole('heading', { name: '404 Not Found' })).toBeInTheDocument();
    });
  });
});
