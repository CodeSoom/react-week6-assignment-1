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

    useSelector.mockImplementation((selector) => selector({
      regions: [],
      categories: [],
      restaurants: [],
    }));
  });

  context('with path /', () => {
    it('render HomePage', () => {
      const { container } = render(
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>,
      );

      expect(container).toHaveTextContent('Home');
    });
  });

  context('with path /restaurants', () => {
    it('render RestaurantsPage', () => {
      const { container } = render(
        <MemoryRouter initialEntries={['/restaurants']}>
          <App />
        </MemoryRouter>,
      );

      expect(container).toHaveTextContent('선택해주세요');
    });
  });
});
