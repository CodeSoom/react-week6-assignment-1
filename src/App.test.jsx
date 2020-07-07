import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import App from './App';

import routes from '../fixtures/routes';

describe('App', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    regions: [],
    categories: [],
    restaurants: [],
  }));

  it('renders header all the time', () => {
    const containers = routes.map((route) => render(
      <MemoryRouter initialEntries={[route]}>
        <App />
      </MemoryRouter>,
    ));
    containers.map(({ container }) => expect(container).toHaveTextContent('헤더'));
  });

  context('with path /', () => {
    it('renders the HomePage', () => {
      const { container } = render((
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      ));

      expect(container).toHaveTextContent('Home');
    });
  });
});
