import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import App from './App';

test('App', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    regions: [
      { id: 1, name: '서울' },
    ],
    categories: [],
    restaurants: [],
  }));

  const { container } = render((
    <MemoryRouter initialEntries={['/restaurants']}>
      <App />
    </MemoryRouter>
  ));

  expect(container).toHaveTextContent('서울');
});
