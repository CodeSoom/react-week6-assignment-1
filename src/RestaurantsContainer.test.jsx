import React from 'react';

import { Router } from 'react-router-dom';

import { render, fireEvent } from '@testing-library/react';

import { useSelector } from 'react-redux';

import { createMemoryHistory } from 'history';

import RestaurantsContainer from './RestaurantsContainer';

describe('RestaurantsContainer', () => {
  const history = createMemoryHistory({ initialEntries: ['/'] });

  beforeEach(() => {
    history.push = jest.fn();

    useSelector.mockImplementation((selector) => selector({
      restaurants: [
        { id: 1, name: '양천주가' },
      ],
    }));
  });

  function renderApp() {
    return render((
      <Router history={history}>
        <RestaurantsContainer />
      </Router>
    ));
  }

  context('with path /restaurants', () => {
    it('renders the restaurants page', () => {
      const { container } = renderApp();

      expect(container).toHaveTextContent('양천주가');
    });
  });

  context('with path restaurants/{id}', () => {
    it('renders the restaurant detail page', () => {
      const { getByText } = renderApp();

      fireEvent.click(getByText('양천주가'));

      expect(history.push).toHaveBeenCalledWith('/restaurants/1');
    });
  });
});
