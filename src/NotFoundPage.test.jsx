import React from 'react';

import { render } from '@testing-library/react';

import NotFoundPage from './NotFoundPage';

describe('NotFoundPage', () => {
  it('rendering', () => {
    render((
      <NotFoundPage />
    ));
  });
});
