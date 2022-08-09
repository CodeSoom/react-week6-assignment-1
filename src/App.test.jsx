import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import App from './App';

test('App', () => {
  render(<App />);
});

jest.mock('react-redux');

describe('App', () => {
  beforeEach(() => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) =>
      selector({
        regions: [],
        categories: [],
        restaurants: [],
      }),
    );
  });

  function renderApp({ path }) {
    return render(
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>,
    );
  }

  context('with path /', () => {
    it('render HomePage', () => {
      const { container } = renderApp({ padth: '/' });

      expect(container).toHaveTextContent('Home');
    });
  });

  context('with path /restaurants', () => {
    it('render RestaurantsPage', () => {
      const { container } = renderApp({ padth: '/restaurants' });

      expect(container).toHaveTextContent('선택해주세요');
    });
  });
});
