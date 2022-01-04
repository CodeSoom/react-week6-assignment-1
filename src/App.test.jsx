import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

test('App', () => {
  useSelector.mockImplementation((selector) =>
    selector({
      regions: [],
      categories: [],
      restaurants: [],
    })
  );

  render(<App />);
});
