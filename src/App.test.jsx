import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

function renderApp({ path }) {
  render((
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>
  ));
  return {
    queryByText: (text) => screen.queryByText(text),
  };
}

describe('App', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
  });

  context('with path /restaurants', () => {
    beforeEach(() => {
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

    it('renders restaurants page', () => {
      const { queryByText } = renderApp({ path: '/restaurants' });

      expect(dispatch).toBeCalled();

      expect(queryByText('서울')).not.toBeNull();
      expect(queryByText('한식')).not.toBeNull();
    });
  });
});
