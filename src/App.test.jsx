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
    regions: [
      { id: 1, name: '서울' },
    ],
    categories: [
      { id: 1, name: '한식' },
    ],
    restaurants: [
      { id: 1, name: '달빛술담' },
    ],
  }));

  it('renders header all the time', () => {
    const containers = routes.map((route) => {
      const { container } = render(
        <MemoryRouter initialEntries={[route]}>
          <App />
        </MemoryRouter>,
      );
      return container;
    });
    containers.map((container) => expect(container).toHaveTextContent('헤더'));
  });

  context('with path /', () => {
    it('renders the home page', () => {
      const { container } = render((
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      ));

      expect(container).toHaveTextContent('Home');
    });
  });

  context('with path /about', () => {
    it('renders the about page', () => {
      const { container } = render((
        <MemoryRouter initialEntries={['/about']}>
          <App />
        </MemoryRouter>
      ));

      expect(container).toHaveTextContent('About');
    });
  });

  context('with path /restaurants', () => {
    it('renders the restaurants page', () => {
      const { container } = render((
        <MemoryRouter initialEntries={['/restaurants']}>
          <App />
        </MemoryRouter>
      ));

      expect(container).toHaveTextContent('서울');
      expect(container).toHaveTextContent('한식');
      expect(container).toHaveTextContent('달빛술담');
    });
  });

  context('without matched pathname', () => {
    it('renders the not found page', () => {
      const { container } = render((
        <MemoryRouter initialEntries={['/nosuchpage']}>
          <App />
        </MemoryRouter>
      ));

      expect(container).toHaveTextContent('404 Not Found');
    });
  });
});
