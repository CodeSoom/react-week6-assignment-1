import React from 'react';

import { render } from '@testing-library/react';

import regions from '../fixtures/regions';

import App from './App';

test('App', () => {
  const { getByText } = render((
    <App
      regions={regions}
    />
  ));
  expect(getByText('서울')).not.toBeNull();
  expect(getByText('대전')).not.toBeNull();
});
