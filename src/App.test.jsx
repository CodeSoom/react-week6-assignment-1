import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';
import { MemoryRouter } from 'react-router-dom';

jest.mock('react-redux');
jest.mock('./services/api');

describe('App', () => {
  const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      regions: [],
      categories: [],
      restaurants: [],
    }));
  context('with path /', () => {
    it('renders Home Page', () => {
      const { container } = render((
        <MemoryRouter initialEntries={["/"]}>
          <App />
        </MemoryRouter>
      ));
      expect(container).toHaveTextContent('Home');
    });
  });
  context('with path /about', () => {
    it('renders About Page', () => {
      const { container } = render((
        <MemoryRouter initialEntries={["/about"]}>
          <App />
        </MemoryRouter>
      ));
      expect(container).toHaveTextContent('About');
    });
    
  });
  context('with path /restaurants', () => {
    it('renders Restaurants Page', () => {
      const { container } = render((
        <MemoryRouter initialEntries={["/restaurants"]}>
          <App />
        </MemoryRouter>
      ));
      expect(container).toHaveTextContent('Restaurants');
    });
  });
  context('with path /xxx', () => {
    it('renders Restaurants Page', () => {
      const { container } = render((
        <MemoryRouter initialEntries={["/xxx"]}>
          <App />
        </MemoryRouter>
      ));
      expect(container).toHaveTextContent('404 NotFound');
    });
  });
});
