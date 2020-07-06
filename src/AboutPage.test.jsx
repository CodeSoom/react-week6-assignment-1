import React from 'react';

import { render } from '@testing-library/jest-dom';

import AboutPage from './AboutPage';

test('AboutPage', () => {
  const { container } = render((
    <AboutPage />
  ));

  expect(container).toHaveTextContent('About');
});
