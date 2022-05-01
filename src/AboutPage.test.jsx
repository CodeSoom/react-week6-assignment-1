import React from 'react';

import { render } from '@testing-library/react';

import AboutPage from './AboutPage';

test('AboutPage', () => {
  const { queryByText } = render((
    <AboutPage />
  ));

  expect(queryByText('About')).not.toBeNull();
});
