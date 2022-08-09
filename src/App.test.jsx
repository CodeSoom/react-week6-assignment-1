import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

test('App', () => {
  render((<App />));
});

jest.mock('react-redux');

describe('App', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      regions: [],
      categoties: [],
      restaurants: [],
    }));
  });
});
