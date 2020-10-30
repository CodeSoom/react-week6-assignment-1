import React from 'react';

import { render } from '@testing-library/react';

import NotFoundPage from './AboutPage';

test('AboutPage', () => {
  render((
    <NotFoundPage />
  ));
});
