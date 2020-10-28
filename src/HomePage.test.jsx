import React from 'react';

import { createMemoryHistory } from 'history';

import { fireEvent, render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import HomePage from './HomePage';

describe('HomePage', () => {
  function renderHomePage() {
    const history = createMemoryHistory();
    const rendering = render((
      <MemoryRouter history={history}>
        <HomePage />
      </MemoryRouter>
    ));

    return {
      history,
      rendering,
    };
  }

  it('show home title, About and Restaurants', () => {
    const { rendering: { container, getByText } } = renderHomePage();

    expect(container).toHaveTextContent('Home');
    expect(getByText('About')).not.toBeNull();
    expect(getByText('Restaurants')).not.toBeNull();
  });

  describe('click About', () => {
    it('go to the About page', () => {
      const { rendering: { getByText }, history } = renderHomePage();

      fireEvent.click(getByText('About'));

      expect(history.location.pathname).toBe('about');
    });
  });

  describe('click Restaurants', () => {
    it('go to the About page', () => {
      const { rendering: { getByText }, history } = renderHomePage();

      fireEvent.click(getByText('Restaurants'));

      expect(history.location.pathname).toBe('restaurants');
    });
  });
});
