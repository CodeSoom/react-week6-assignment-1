import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import App from './App';

test('App', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    regions: [],
    categories: [],
    restaurants: [],
  }));

  const { container } = render((
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  ));

  expect(container).toHaveTextContent('Home');
});
