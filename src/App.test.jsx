import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

test('App', () => {
  const { container } = render((
    <App />
  ));

  expect(container).toHaveTextContent('HOME');
  expect(container).toHaveTextContent('About');
  expect(container).toHaveTextContent('Restaurants');
  expect(container).toHaveTextContent('헤더');
});
