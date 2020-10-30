import React from 'react';

import { Router } from 'react-router-dom';

import { createMemoryHistory } from 'history';

import { render, fireEvent } from '@testing-library/react';

import HomePage from './HomePage';

test('HomePage', () => {
  const history = createMemoryHistory({ initialEntries: ['/'] });

  history.push = jest.fn();

  const { getByText } = render((
    <Router history={history}>
      <HomePage />
    </Router>
  ));

  expect(getByText('Home')).not.toBeNull();
  expect(getByText('About')).not.toBeNull();
  expect(getByText('Restaurants')).not.toBeNull();

  fireEvent.click(getByText('About'));

  expect(history.push).toHaveBeenCalledWith('/about');

  fireEvent.click(getByText('Restaurants'));

  expect(history.push).toHaveBeenCalledWith('/restaurants');

  fireEvent.click(getByText('멸망의길'));

  expect(history.push).toHaveBeenCalledWith('/xxx');
});
