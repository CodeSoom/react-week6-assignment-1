import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch } from 'react-redux';
import App from './App';

jest.mock('react-redux');

test('App', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  beforeEach(() => {
    dispatch.mockClear();
  });

  const { container } = render((
    <App />
  ));

  expect(container).toHaveTextContent('Home');
  expect(container).toHaveTextContent('About');
  expect(container).toHaveTextContent('Restaurants');
  expect(container).toHaveTextContent('헤더');
});
