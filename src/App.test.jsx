import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

describe('App', () => {
  const dispatch = jest.fn();

  function renderApp({ path }) {
    const { container } = render((
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    ));

    return {
      container,
    };
  }

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

  context('with / as path', () => {
    it('renders HomePage', () => {
      const { container } = renderApp({ path: '/' });

      expect(container).toHaveTextContent('Home');
    });
  });

  context('with /about as path', () => {
    it('renders AboutPage', () => {
      const { container } = renderApp({ path: '/about' });

      expect(container).toHaveTextContent('About');
    });
  });
});
