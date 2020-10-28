import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import HomePage from './HomePage';

describe('HomePage', () => {
  const history = createMemoryHistory();

  function renderHomePage() {
    return render((
      <MemoryRouter history={history}>
        <HomePage />
      </MemoryRouter>
    ));
  }

  it('show home title, About and Restaurants', () => {
    const { container, getByText } = renderHomePage();

    expect(container).toHaveTextContent('Home');
    expect(getByText('About')).not.toBeNull();
    expect(getByText('Restaurants')).not.toBeNull();
  });

  describe('click About', () => {
    it('go to the About page', () => {
      const { getByText } = renderHomePage();

      fireEvent.click(getByText('About'));

      expect(history.location.pathname).toBe('/about');
    });
  });

  describe('click Restaurants', () => {
    it('go to the About page', () => {
      const { getByText } = renderHomePage();

      fireEvent.click(getByText('Restaurants'));

      expect(history.location.pathname).toBe('/restaurants');
    });
  });
});
