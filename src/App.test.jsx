import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import regions from '../fixtures/regions';

import App from './App';

jest.mock('react-redux');

test('App', () => {
  useSelector.mockImplementation((selector) => selector({
    regions,
  }));

  const { getByText } = render((
    <App />
  ));
  expect(getByText('서울')).not.toBeNull();
  expect(getByText('대전')).not.toBeNull();
});
